# Cập nhật các bài được tô xanh trong file hỗ trợ Đại sứ Xanh

## Mục tiêu và phạm vi

Ngày đọc nguồn và cập nhật: 07/10/2026. Theo yêu cầu user, dùng các dòng có màu nền xanh cyan `FF00FFFF` trong [20260811 Hỗ trợ ĐSX.xlsx](https://docs.google.com/spreadsheets/d/15NpuWe_0EwqQ0Cxcrf-MKFhKx8YqnyAu/edit?gid=2083927115#gid=2083927115). Đọc bản Excel gốc để giữ màu đánh dấu và hyperlink, không sửa file nguồn. File chỉ có tab `Sheet1`, màu xanh nằm ở B13:H13 và B31:H35; B31:B32 được gộp cho Brochure.

Bắt đầu từ main `d514527`, đã gồm PR #40 tạm ẩn bài trống. Phạm vi này gồm năm nội dung: hai bài đang có được cập nhật và ba bài mới được thêm cho Đại sứ Xanh. Không mở lại các bài Coming soon khác.

## Nguồn và bài tương ứng

| Dòng nguồn | Tài liệu liên kết | Bài trên website |
|---|---|---|
| 13 | [Hướng dẫn tạo khách hàng](https://docs.google.com/document/d/1Oo0H_51fNWkgSxSQVfvdlGEKK7ZBTpDX/edit), sửa 07/10/2026 | Cập nhật `gia-nhap-he-sinh-thai/tim-kiem-va-theo-doi-khach-hang/tao-khach-hang.mdx` |
| 31 | [Leaflet EU Điện mặt trời 20261003](https://dattechcomvn-my.sharepoint.com/:b:/g/personal/minhanh_datgroup_com_vn/IQAv7YMkS6CFT5xY11xuNBWBAYUFIY9GVBW5ckYej9ugobc?e=IW3wJq) | Cập nhật bài Brochure với PDF Khách hàng và sáu trang xem trước |
| 32 | [Leaflet Đại sứ Xanh 20261003](https://dattechcomvn-my.sharepoint.com/:b:/g/personal/minhanh_datgroup_com_vn/IQCm2OBQdWkMQLT_3Mo0N09xAXl6ppvR1x5UHLWn6FQTzOg?e=OVMgGq) | Cùng bài Brochure, thêm PDF Đại sứ Xanh và hai trang xem trước |
| 33 | [Hướng dẫn tư vấn và báo giá sơ bộ](https://docs.google.com/document/d/11KYtGUsmcDu7LM7BXUWrFFIUsJYJA_OI/edit), sửa 07/10/2026 | Thêm `kien-thuc-giai-phap/tu-van-va-trien-khai/huong-dan-tu-van-va-bao-gia-so-bo.mdx` |
| 34 | [Quy trình và thời gian lắp đặt](https://docs.google.com/document/d/1VEQxLCLkZCNe7DRls07ecrZtlTao-s7s/edit), sửa 07/10/2026 | Thêm `kien-thuc-giai-phap/tu-van-va-trien-khai/quy-trinh-va-thoi-gian-lap-dat.mdx` |
| 35 | [Chính sách bảo hành](https://docs.google.com/document/d/1B97T2NyTeQvHQk9VjSsX3lAjE_sU8euy/edit), sửa 07/10/2026 | Thêm `kien-thuc-giai-phap/tu-van-va-trien-khai/chinh-sach-bao-hanh.mdx` |

Các đường dẫn MDX trong bảng đều tương đối với `docs/dai-su-xanh/`. Ba bài mới nằm trong chủ đề Tư vấn và triển khai của nhóm Kiến thức giải pháp; danh mục dùng chung giúp sidebar, trang nhóm và tìm kiếm nhận các bài mới.

## Cách chuyển nội dung

- Bài Tạo khách hàng giữ URL và đủ tám bước; bước đầu chuyển sang Chia sẻ → dán link chia sẻ thay cho luồng qua Bài viết cũ. Giữ yêu cầu kiểm tra Mã Đại sứ trước khi nhập thông tin khách hàng.
- Brochure giữ URL bài cũ, thay tài liệu được dẫn trong bài bằng hai bản SharePoint ngày 03/10/2026. Cột I31 có folder Drive chứa bản cũ tháng 6/8; dùng hai link H31/H32 được tô xanh để xác định phiên bản. File cũ trong repository được bảo toàn.
- Giữ toàn bộ nội dung nghiệp vụ của ba Word mới: các bước, bảng chỉ số, sáu mốc thời gian, cơ chế bảo hành hai lớp, thời hạn tham khảo và các câu trả lời mẫu. Không suy diễn các mốc tham khảo thành SLA hoặc cam kết cố định.
- Bảng quy trình năm cột được chuyển thành sáu mục có thời gian, mô tả và lưu ý; các bảng gọn về chỉ số/bảo hành được giữ dưới dạng bảng.
- Theo yêu cầu bổ sung ngày 07/10, giữ đủ ảnh gốc và đúng vị trí: bảy ảnh Tạo khách hàng, hai ảnh Tư vấn/báo giá sơ bộ, một sơ đồ Quy trình/thời gian lắp đặt. Tài liệu Chính sách bảo hành không có ảnh. Ảnh trong ô bảng cũng phải được lấy; ảnh kết quả ước tính nằm trong ô bảng ở Bước 3. Các file được sao chép nguyên bản, đối chiếu hash và thứ tự với Word.
- Danh sách 35 trang tạm ẩn được giữ. Đợt khôi phục text/ảnh cũng rà lại bốn bài Nhà lắp đặt đã cập nhật; xem [đối chiếu nguồn đầy đủ](2026-10-07-source-content-fidelity.md).

## Kiểm tra và xuất bản

Kiểm tra typecheck, unit tests, build, e2e, link PDF/ảnh và preview desktop/mobile trước khi mở PR. Main yêu cầu check `quality` và một review chấp thuận; GitHub Pages xuất bản sau khi merge.
