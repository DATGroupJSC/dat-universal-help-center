# Đối chiếu và khôi phục text, bảng, ảnh nguồn

Ngày thực hiện: 07/10/2026. Theo yêu cầu user, bài đăng phải bám sát cả text và hình trong tài liệu gốc. Bắt đầu từ main `36f7722`, đã có bản sửa khung lưu ý. Dùng lại các bản nguồn đã tải trong hai đợt cập nhật, không sửa tài liệu gốc.

## Phạm vi và nguồn

Đối chiếu chín Word: bốn tài liệu của các dòng tô xanh trong [file hỗ trợ ĐSX](https://docs.google.com/spreadsheets/d/15NpuWe_0EwqQ0Cxcrf-MKFhKx8YqnyAu/edit?gid=2083927115#gid=2083927115), đọc 07/10; năm tài liệu Done trong [file theo dõi nội dung](https://docs.google.com/spreadsheets/d/1JSAvvHmkX2zYrvElSo__u2BvYNwdJt-v/edit?gid=2083927115#gid=2083927115), đọc 05/10. Hai PDF Brochure SharePoint phiên bản 03/10 cũng được đối chiếu. Đây là tài liệu nội dung được user chọn, không phải dữ liệu vận hành live.

Link từng nguồn và bài tương ứng được ghi tại [các dòng xanh](2026-10-07-green-marked-ambassador-content.md) và [các tài liệu Done](2026-10-05-installer-done-content.md).

| Bài | Ảnh trong Word | Trang hình từ PDF | Bổ sung lần này |
|---|---:|---:|---|
| Tạo khách hàng | 7 | 0 | Ảnh Chia sẻ ở Bước 2, tính toán/khảo sát ở Bước 5, gửi yêu cầu ở Bước 8; câu đăng nhập theo nguồn |
| Hướng dẫn tư vấn và báo giá sơ bộ | 2 | 0 | Ảnh kết quả ước tính ở Bước 3, nằm trong ô bảng của Word |
| Quy trình và thời gian lắp đặt | 1 | 0 | Đã đủ ảnh; đối chiếu các bước, thời gian, mô tả và lưu ý |
| Chính sách bảo hành | 0 | 0 | Nguồn không có ảnh; đối chiếu text và bảng |
| Brochure | 0 | 8 | Đã đủ sáu trang EU và hai trang ĐSX; hai PDF nguyên bản |
| Tạo tài khoản và đăng nhập Nhà lắp đặt | 11 | 0 | Bảy ảnh nguồn bị thiếu; dùng ảnh đăng nhập riêng từ nguồn thay ảnh OTP lặp; bảng onboarding và caption |
| Tổng quan, Quyền lợi/trách nhiệm, Chính sách hợp tác Nhà lắp đặt | 0 | 0 | Các nguồn không có ảnh; đối chiếu text, bảng và điều kiện |

## Kết quả đối chiếu

- Khôi phục 11 file ảnh bị thiếu; toàn bộ 21 ảnh Word được đối chiếu hash và thứ tự xuất hiện trong XML nguồn, gồm cả ảnh/bảng lồng. Hai Brochure có đủ tám trang hình và hai PDF giữ nguyên file nguồn.
- Rà tất cả paragraph và ô bảng của chín Word, kể cả câu ngắn. Bảng onboarding bị bỏ sót được khôi phục đủ bốn cột và năm dòng bước; mục Thành phần hồ sơ và 11 caption được bổ sung đầy đủ.
- Các khác biệt còn lại là trình bày: tên bài/menu, cấp tiêu đề và số mục, link có nhãn, sửa lỗi gõ `lịnk`/`DAt`, dùng danh sách thay ô bảng, đặt lưu ý trong callout. Nội dung nghiệp vụ, số liệu, điều kiện và các câu trả lời mẫu được giữ. Không tự rút gọn nội dung hoặc bỏ ảnh.
- Kiểm tra hiển thị ảnh ở đúng bước và tải được trên desktop/mobile; regression test kiểm tra đủ ảnh, thứ tự bước và bảng onboarding. Giữ bản sửa callout đã có trên main.

## Xuất bản

Chạy typecheck, unit tests, production build và e2e trước khi mở PR. Website public cập nhật sau khi PR được review và merge theo branch protection.
