# Cập nhật nội dung Nhà lắp đặt từ các tài liệu Done

## Mục tiêu và phạm vi

Ngày cập nhật: 05/10/2026. Thay nội dung Coming soon của bốn bài trong nhóm **Bắt đầu với DAT Universal** bằng nội dung của năm tài liệu được đánh dấu `Done` trong tab `Installers` của [file theo dõi nội dung](https://docs.google.com/spreadsheets/d/1JSAvvHmkX2zYrvElSo__u2BvYNwdJt-v/edit?gid=2083927115#gid=2083927115).

File nguồn là `.xlsx` lưu trên Google Drive, được tải và đọc nguyên bản; cột I có tiêu đề **Kết quả**. Đây là trạng thái duyệt nội dung được user yêu cầu dùng cho lần cập nhật, không phải dữ liệu vận hành live. Bản nguồn có thời điểm sửa gần nhất 22/09/2026 theo metadata Drive.

## Nguồn và bài tương ứng

| Dòng nguồn | Tài liệu có Kết quả Done | Bài cập nhật |
|---|---|---|
| 3 | [Tổng quan hệ sinh thái DAT Universal](https://docs.google.com/document/d/1d31GA1wuXx3Vbt6ZMgF1HjLJCuuM5ZEV/edit), sửa 17/09/2026 | `docs/nha-lap-dat/bat-dau/tong-quan-he-sinh-thai.mdx` |
| 8 | [Quyền lợi và trách nhiệm của Đối tác lắp đặt](https://docs.google.com/document/d/1x_L3Vpdzl2jYwggjh1fUjPfAHmd2x0YY/edit), sửa 15/09/2026 | `docs/nha-lap-dat/bat-dau/quyen-loi-va-trach-nhiem.mdx` |
| 11 | [Chính sách hợp tác](https://docs.google.com/document/d/10p1sW0RhFPbY_86WPIKZiTDeMiZAS18L/edit), sửa 22/09/2026 | `docs/nha-lap-dat/bat-dau/chinh-sach-hop-tac.mdx` |
| 17 | [Tạo tài khoản Nhà lắp đặt](https://docs.google.com/document/d/1C2y3f64y3DvvjLuUsWQWc8u8Qamjjx4i/edit), sửa 14/09/2026 | `docs/nha-lap-dat/bat-dau/tao-tai-khoan-va-dang-nhap.mdx` |
| 18 | [Đăng nhập tài khoản Nhà lắp đặt](https://docs.google.com/document/d/1_bUhni7Zk7PXXU2fUqf1yS_1U5gH24VY/edit), sửa 14/09/2026 | Cùng bài Tạo tài khoản và đăng nhập |

## Cách chuyển nội dung

- Giữ nội dung nghiệp vụ, số liệu, điều kiện, tỷ lệ, phạm vi tính và thời hạn trong tài liệu nguồn. Các bảng chính sách được trình bày thành mục có nhãn rõ ràng để dễ đọc trên điện thoại.
- Giữ URL bài hiện có, vị trí menu và nội dung ngoài phạm vi. Bật mục lục trong trang cho bốn bài đã có nội dung.
- Ngày 07/10, theo yêu cầu giữ đầy đủ text và hình, khôi phục đủ chín ảnh từ tài liệu tạo tài khoản và hai ảnh từ tài liệu đăng nhập, đúng thứ tự nguồn. Bổ sung bảng onboarding năm bước, mục Thành phần hồ sơ và các caption còn thiếu. Ảnh được sao chép nguyên bản; đối chiếu hash và thứ tự với hai Word. Ba tài liệu nghiệp vụ còn lại không có ảnh.
- Ảnh cập nhật hồ sơ trong nguồn ghi ưu đãi 1% cho inverter và battery, không bao gồm tấm PV. Phần chính sách áp dụng vẫn dùng tài liệu Done ở dòng 11: ưu đãi 1% trên inverter, Battery và tủ điện do DAT Group cung cấp. Không sửa ảnh nguồn thành chính sách mới.
- Ghi chú cũ ở ô G11 yêu cầu chỉnh wording ngày 21/09. Tài liệu chính sách đã được sửa ngày 22/09 và cột I hiện là Done; dùng bản hiện tại theo yêu cầu user.

## Đưa lên website

Kiểm tra typecheck, unit tests, build, e2e và hiển thị desktop/mobile trước khi mở PR. Branch `main` yêu cầu check `quality` và một review chấp thuận. Website được GitHub Pages cập nhật sau khi PR được merge.
