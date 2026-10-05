# Tạm ẩn các bài chưa có nội dung

## Mục tiêu và nguồn

Theo yêu cầu user ngày 05/10/2026, tạm ẩn các bài đang hiển thị Coming soon hoặc chưa có nội dung trên `https://hotro.datuniversal.com`.

Rà source `main` tại commit `a8f83f0` và đọc trực tiếp các trang trên website ngày 05/10/2026. Kết quả: 35 trang trả HTTP 200, gồm 31 trang Coming soon, một trang Khách hàng cuối chỉ thông báo đang bổ sung, và ba trang chủ đề chỉ có link đến bài trống. Bốn bài Nhà lắp đặt từ tài liệu Done ở PR #39 đã có nội dung và được giữ.

## Phạm vi tạm ẩn

- Đại sứ xanh: 19 bài Coming soon và ba trang chủ đề trống (Chính sách hoa hồng, Gửi yêu cầu hỗ trợ, Thông báo & cập nhật).
- Nhà lắp đặt: 12 bài Coming soon. Ba nhóm hoàn toàn trống (SLA và cảnh báo, Tiêu chuẩn lắp đặt, Trung tâm hỗ trợ) cũng biến mất khỏi danh sách và không tạo trang danh mục public.
- Khách hàng cuối: một trang chưa có nội dung; tạm ẩn mục này khỏi navbar và trang chủ.

Danh sách chi tiết theo doc ID ở `src/data/hiddenDocs.json`. File nguồn MDX vẫn nguyên vẹn. Danh sách này được dùng chung để loại trang khỏi production build, menu, thẻ nội dung, sitemap và search index. Truy cập trực tiếp URL đã ẩn trả 404.

Không dựa riêng vào status `updating` trong metadata vì một số bài đã có nội dung nhưng status cũ chưa đổi. Giữ các bài Hướng dẫn nền tảng, Cách lấy hình ảnh/video, Cách rút hoa hồng và Quy trình thanh toán hoa hồng sau khi kiểm tra nội dung thực tế.

Link redirect cũ về nhóm Chính sách hoa hồng được chuyển đến nhóm Quy ước hợp tác đang có nội dung. Không tạo link tới trang đã ẩn.

## Khôi phục khi có nội dung

1. Cập nhật nội dung trong file MDX hiện có và kiểm tra nguồn phê duyệt.
2. Xóa doc ID của bài khỏi `src/data/hiddenDocs.json`. Nếu khôi phục một chủ đề đang trống, xóa cả ID `/index` của chủ đề.
3. Chạy typecheck, unit tests, build và e2e; kiểm tra link và hiển thị.
4. Merge qua PR theo rule bảo vệ branch `main`. Các nhóm và menu được dựng lại từ danh mục giữ nguyên.

## Kiểm tra

Kiểm tra navigation không chứa doc ID đã ẩn, production không tạo các trang đó, bài đã có nội dung vẫn hiện, file nguồn không bị xóa. Kiểm tra trực tiếp 404, danh sách bài và layout desktop/mobile.
