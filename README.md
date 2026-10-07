# Trung tâm hỗ trợ DAT Universal

Website public để Đại sứ xanh, Nhà lắp đặt và Khách hàng cuối tự tìm hướng dẫn chính thức. Website dùng Docusaurus 3; nội dung bài viết được lưu bằng Markdown/MDX và xuất bản qua GitHub Pages.

## Cấu trúc nội dung

Mỗi nhóm người dùng có một khu vực và menu trái riêng:

```text
docs/
├── dai-su-xanh/       # Hướng dẫn riêng cho Đại sứ xanh
├── nha-lap-dat/       # Hướng dẫn riêng cho Nhà lắp đặt
├── khach-hang/        # Hướng dẫn riêng cho Khách hàng cuối
└── ho-tro/            # Hỗ trợ chung cho mọi nhóm
```

Khi người đọc chọn một nhóm, cột trái chỉ hiển thị nội dung của nhóm đó. Riêng Đại sứ xanh, menu hiển thị hai cấp: bốn nhóm lớn và các bài/chủ đề trực tiếp thuộc nhóm. Các bài chi tiết được đặt thẳng dưới nhóm lớn để người đọc không phải mở thêm cấp menu. Một số trang tổng hợp chủ đề vẫn được giữ để hỗ trợ điều hướng bằng thẻ nội dung và các đường dẫn hiện có. Không để bài của nhóm này trong thư mục của nhóm khác.

Chỉ thêm quy trình, chính sách, SLA, giá, bảo hành hoặc thông số khi có nguồn chính thức đã được content owner phê duyệt. Không tự điền URL đăng ký, hoa hồng, quyền lợi hay kênh hỗ trợ tạm.

## Thêm hoặc sửa một bài

Khung lưu ý có tiêu đề dùng cú pháp `:::note[Tiêu đề]` hoặc `:::caution[Tiêu đề]`, có dòng trống trước/sau nội dung và kết thúc bằng `:::`. Cấu hình hiện tại không nhận cú pháp cũ `:::note Tiêu đề`; phải kiểm tra khung hiển thị đúng trong preview.

Các trang chưa có nội dung được tạm ẩn bằng danh sách `src/data/hiddenDocs.json`; file MDX vẫn được giữ. Sau khi có nội dung được duyệt, xóa doc ID của bài (và ID `/index` của chủ đề nếu đang ẩn) khỏi danh sách để khôi phục menu, route và tìm kiếm. Xem [phạm vi và cách khôi phục](planning/specs/2026-10-05-hide-unfinished-articles.md).

Khu vực Nhà lắp đặt gồm năm nhóm: Bắt đầu với DAT Universal; Hướng dẫn sử dụng nền tảng (có sáu bước thao tác); SLA và cảnh báo; Tiêu chuẩn lắp đặt; Trung tâm hỗ trợ. Danh mục nằm trong `src/data/installerContent.ts`, bài viết trong `docs/nha-lap-dat/`. Các bài chưa có nội dung chính thức hiển thị Coming soon; thay nội dung ngay trong file MDX tương ứng khi đã được duyệt. Cấu trúc này được chốt theo agenda đào tạo Installer trong phiên làm việc.

1. Trên GitHub, tạo branch mới từ `main`, ví dụ `content/huong-dan-referral`.
2. Mở đúng thư mục nhóm người đọc. Ví dụ, bài cho Đại sứ xanh nằm trong `docs/dai-su-xanh/`.
3. Sao chép `docs/_templates/huong-dan.mdx`, đổi tên file theo nội dung không dấu và dùng dấu gạch ngang, ví dụ `cach-gioi-thieu-khach-hang.mdx`.
4. Sửa phần đầu bài: `title`, `description`, `sidebar_position`. Số `sidebar_position` nhỏ hơn sẽ đứng trước trong menu cùng cấp.
5. Nếu tạo nhóm chủ đề mới, tạo thư mục mới cùng file `_category_.json`; dùng `position` để xếp thứ tự nhóm đó trong cột trái.
6. Thêm ảnh vào `static/img/`, đặt tên chữ thường không dấu/không khoảng trắng. Trong bài, chèn theo mẫu: `![Mô tả ảnh](/img/ten-anh.png)`.
7. Commit thay đổi vào branch, sau đó mở Pull Request để kiểm tra trước khi đưa lên website.

47 bài chi tiết của Đại sứ xanh hiện có cùng một **nội dung minh hoạ** để người viết thấy cách dùng tiêu đề, danh sách, hình, bảng, trích dẫn và khung video. Đây không phải nội dung nghiệp vụ đã phê duyệt. Khi có nội dung chính thức, thay phần `<SampleArticle ... />` trong đúng bài bằng nội dung đã được duyệt; không giữ nhãn “Nội dung minh hoạ” trong bài public cuối cùng.

Không đưa password, OTP, token, API key, dữ liệu khách hàng hay ảnh chụp chưa che thông tin cá nhân lên GitHub public.

## Quy trình duyệt Pull Request

1. Người viết tạo Pull Request từ branch nội dung vào `main`.
2. Người duyệt mở tab **Files changed**, kiểm tra câu chữ, ảnh, đường link và vị trí menu.
3. Chờ GitHub Actions `build-and-test` đạt. Nếu báo đỏ, không merge; mở phần `Checks` để xem bài hoặc link nào lỗi.
4. Với nội dung về chính sách, hoa hồng, quyền lợi, điều kiện hợp tác hoặc kỹ thuật, cần một người quản trị khác review trước khi merge.
5. Sau khi merge vào `main`, GitHub Pages tự build và cập nhật website public.

## Chạy website tại máy

Yêu cầu Node.js 22 hoặc mới hơn.

```bash
npm ci
npm run start
```

Trước khi mở Pull Request, chạy:

```bash
npm run typecheck
npm run test
npm run build
npm run test:e2e
```

`npm run build` kiểm tra đặc biệt quan trọng: nó báo link hỏng, trang trùng URL và lỗi MDX trước khi website public bị ảnh hưởng.

## Quyết định giao diện

- [2026-10-07 — Cập nhật các bài Đại sứ Xanh được tô xanh](planning/specs/2026-10-07-green-marked-ambassador-content.md): sửa Tạo khách hàng, thay Brochure bằng hai bản ngày 03/10, thêm tư vấn/báo giá sơ bộ, quy trình/thời gian lắp đặt và chính sách bảo hành.
- [2026-10-05 — Tạm ẩn các bài chưa có nội dung](planning/specs/2026-10-05-hide-unfinished-articles.md): 32 bài và ba trang chủ đề trống; giữ file nguồn, loại khỏi menu, tìm kiếm và production build.
- [2026-10-05 — Cập nhật bốn bài Nhà lắp đặt từ các tài liệu Done](planning/specs/2026-10-05-installer-done-content.md): nguồn tại tab Installers, dòng 3/8/11/17/18; tổng quan, quyền lợi và trách nhiệm, chính sách hợp tác, tạo tài khoản và đăng nhập. Ghi rõ nguồn và phạm vi sử dụng ảnh hướng dẫn.
- [2026-08-13 — Lề trang và vị trí tên website](planning/specs/2026-08-13-antsomi-layout-and-identity.md): khung desktop căn giữa, ba cột thoáng hơn; tên đầy đủ nằm ở đầu nội dung thay vì cạnh menu.
- [2026-08-13 — Kế hoạch triển khai lề Antsomi](planning/plans/2026-08-13-antsomi-gutters-and-header-identity.md): kiểm tra và thay đổi theme cho shell tài liệu.
- [2026-08-14 — Kế hoạch triển khai nội dung Đại sứ xanh](planning/plans/2026-08-14-dai-su-xanh-content-architecture.md): tạo menu hai cấp, trang chủ đề, bài viết “Đang cập nhật” và chuyển hướng link cũ.
- [2026-08-14 — Cấu trúc nội dung Đại sứ xanh](planning/specs/2026-08-14-dai-su-xanh-content-architecture-design.md): menu hai cấp, danh mục bài viết và quy ước sử dụng trạng thái “Đang cập nhật”.
- [2026-08-17 — Sidebar DAT và bài minh hoạ](planning/specs/2026-08-17-dat-sidebar-and-sample-articles-design.md): menu ba cấp theo phong cách Antsomi, favicon DAT và mẫu trình bày an toàn cho bài chi tiết.
- [2026-09-09 — Hoàn thiện nội dung sáu bước Nhà lắp đặt](planning/specs/2026-09-09-installer-six-step-content-refinement.md): phạm vi nội dung, vị trí ảnh và quy tắc dùng thông tin từ slide đào tạo.

## GitHub Pages và custom domain

Website hiện tại: `https://hotro.datuniversal.com`

GitHub Pages tự deploy khi branch `main` thay đổi. Custom domain hiện tại là `hotro.datuniversal.com`.
