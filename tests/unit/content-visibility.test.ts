import {readFile} from 'node:fs/promises';
import {describe, expect, it} from 'vitest';
import config from '../../docusaurus.config';
import sidebars from '../../sidebars';
import hiddenDocs from '../../src/data/hiddenDocs.json';

describe('temporarily hidden unfinished articles', () => {
  it('removes hidden documents from public sidebars and production routes', () => {
    const navigation = JSON.stringify(sidebars);
    for (const id of hiddenDocs) {
      expect(navigation).not.toContain(`"${id}"`);
    }
    const [, preset] = config.presets![0] as [string, {docs: {exclude: string[]}}];
    expect(preset.docs.exclude).toEqual(expect.arrayContaining(hiddenDocs.map(id => `${id}.mdx`)));
  });

  it('preserves authored guides even when their old status still says updating', () => {
    const navigation = JSON.stringify(sidebars.daiSuXanhSidebar);
    expect(navigation).toContain('chao-mung-dai-su-xanh/huong-dan-nen-tang');
    expect(navigation).toContain('chia-se-bai-viet-va-noi-dung/cach-lay-hinh-anh-video');
    expect(navigation).toContain('quy-trinh-gioi-thieu-khach-hang/quy-trinh-thanh-toan-hoa-hong');
    expect(navigation).toContain('huong-dan-quan-ly-tai-khoan/cach-rut-hoa-hong');
  });

  it('keeps every hidden source file available for later publication', async () => {
    for (const id of hiddenDocs) {
      const source = await readFile(`docs/${id}.mdx`, 'utf8');
      expect(source).toMatch(/<SampleArticle|<UpdatingArticle|Coming soon|<AmbassadorTopicCards|đang được DAT bổ sung/);
    }
  });
});
