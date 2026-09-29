export interface EditorialSectionData {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface EditorialArticleData {
  title: string;
  path: string;
  image: string;
  excerpt: string;
  intro: string;
  sections: EditorialSectionData[];
}

export interface UtilityPageData {
  title: string;
  path: string;
  summary: string;
  sections: EditorialSectionData[];
}

const editorialImageRoot =
  "/sites/70maivietnam-store-f583e865/root-8a5edab2/images";

const editorialImage = (filename: string): string =>
  `${editorialImageRoot}/${filename}`;

export const EDITORIAL_ARTICLES: EditorialArticleData[] = [
  {
    title: "Camera hành trình bị lỗi GPS và bí mật đằng sau lớp phim cách nhiệt",
    path: "/camera-hanh-trinh-bi-loi-gps-va-cach-khac-phuc/",
    image: editorialImage("T400-anh-Mobile-sp-noi-bat.jpg"),
    excerpt:
      "Tìm hiểu những nguyên nhân thường gặp khiến camera hành trình khó bắt GPS và cách kiểm tra khi xe có dán phim cách nhiệt.",
    intro:
      "GPS giúp camera hành trình ghi lại vị trí và tốc độ của xe. Nếu thiết bị mất tín hiệu hoặc cập nhật chậm, hãy kiểm tra vị trí lắp đặt và các vật liệu trên kính trước khi kết luận camera bị hỏng.",
    sections: [
      {
        heading: "Vì sao camera hành trình mất tín hiệu GPS?",
        paragraphs: [
          "Ăng-ten GPS cần một vị trí thoáng để nhận tín hiệu từ vệ tinh. Khi camera hoặc bộ thu đặt sau các lớp vật liệu cản sóng, tín hiệu có thể yếu hơn và thời gian định vị ban đầu có thể lâu hơn.",
          "Phim cách nhiệt có cấu tạo kim loại là một yếu tố cần kiểm tra, nhưng vị trí lắp đặt, nhà xe có mái che và môi trường nhiều vật cản cũng có thể ảnh hưởng đến khả năng bắt tín hiệu.",
        ],
      },
      {
        heading: "Các bước kiểm tra tại chỗ",
        paragraphs: [
          "Đỗ xe ở khu vực ngoài trời, khởi động camera và chờ thiết bị cập nhật vị trí. Nếu xe vừa khởi động hoặc camera vừa được cấp nguồn, hãy cho thiết bị thêm thời gian để tìm tín hiệu.",
        ],
        bullets: [
          "Kiểm tra biểu tượng GPS và thông báo trong ứng dụng 70mai.",
          "Đặt camera hoặc mô-đun GPS ở vị trí thông thoáng theo hướng dẫn lắp đặt.",
          "Thử lại ở vị trí khác trên kính nếu khu vực hiện tại có phim cách nhiệt kim loại.",
        ],
      },
      {
        heading: "Khi nào nên liên hệ hỗ trợ?",
        paragraphs: [
          "Nếu camera vẫn không nhận GPS sau khi đã thử ở nơi thoáng và kiểm tra kết nối, hãy ghi lại mẫu camera, phiên bản ứng dụng và tình trạng hiển thị để bộ phận hỗ trợ hướng dẫn thêm.",
        ],
      },
    ],
  },
  {
    title:
      "Khám phá công nghệ ADAS trên camera hành trình 70mai: Giải pháp lái xe an toàn thời 4.0",
    path: "/kham-pha-cong-nghe-adas-tren-camera-hanh-trinh-70mai/",
    image: editorialImage("70mai-ho-tro-lai-xe-an-toan-adas-0313dc5d.webp"),
    excerpt:
      "ADAS hỗ trợ người lái nhận biết một số tình huống trên đường thông qua cảnh báo trực quan và âm thanh.",
    intro:
      "ADAS là nhóm tính năng hỗ trợ lái xe sử dụng hình ảnh từ camera để nhận biết một số tình huống phía trước. Các cảnh báo giúp người lái chú ý hơn, nhưng không thay thế việc quan sát và điều khiển xe.",
    sections: [
      {
        heading: "ADAS có thể hỗ trợ những gì?",
        paragraphs: [
          "Tùy mẫu camera và cách cài đặt, hệ thống có thể đưa ra cảnh báo liên quan đến khoảng cách với xe phía trước hoặc nguy cơ chệch làn. Tính năng hoạt động dựa trên hình ảnh camera và điều kiện đường thực tế.",
        ],
        bullets: [
          "Cảnh báo khi xe phía trước di chuyển hoặc thay đổi khoảng cách.",
          "Cảnh báo chệch làn trong những điều kiện mà camera nhận diện được vạch đường.",
          "Thông báo bằng hình ảnh hoặc âm thanh để người lái chủ động kiểm tra tình huống.",
        ],
      },
      {
        heading: "Lắp đặt và hiệu chỉnh đúng cách",
        paragraphs: [
          "Camera cần được gắn chắc chắn, hướng về phía trước và nằm trong vùng kính phù hợp. Sau khi lắp, hãy làm theo hướng dẫn của ứng dụng để căn chỉnh khung hình và hiệu chỉnh các cảnh báo nếu mẫu camera hỗ trợ.",
        ],
      },
      {
        heading: "Công nghệ hỗ trợ, người lái vẫn quyết định",
        paragraphs: [
          "ADAS có thể bỏ sót hoặc phát cảnh báo trong một số điều kiện như trời mưa, ánh sáng yếu, vạch đường mờ hoặc đường đông. Luôn giữ khoảng cách an toàn, quan sát trực tiếp và làm chủ phương tiện.",
        ],
      },
    ],
  },
  {
    title: "Camera hành trình ô tô loại nào tốt giá rẻ, lắp ở đâu uy tín?",
    path: "/camera-hanh-trinh-o-to-gia-re-loai-nao-tot/",
    image: editorialImage("M310-Plus-7440a6e8.webp"),
    excerpt:
      "Chọn camera theo nhu cầu ghi hình, điều kiện sử dụng và nơi lắp đặt để cân bằng chi phí với các tính năng cần thiết.",
    intro:
      "Một chiếc camera phù hợp là chiếc đáp ứng đúng nhu cầu ghi hình và dễ sử dụng trên xe của bạn. Hãy cân nhắc chất lượng hình ảnh, số kênh ghi hình, chế độ đỗ xe và khả năng lắp đặt trước khi so sánh giá.",
    sections: [
      {
        heading: "Bắt đầu từ nhu cầu sử dụng",
        paragraphs: [
          "Nếu cần lưu lại hành trình phía trước, camera một kênh có thể đáp ứng nhu cầu cơ bản. Người muốn ghi hình cả phía sau hoặc trong cabin có thể chọn hệ thống nhiều camera tương thích với xe.",
        ],
        bullets: [
          "Chọn độ phân giải phù hợp với mức độ chi tiết bạn cần xem lại.",
          "Kiểm tra tính năng ghi hình ban đêm và dung lượng thẻ nhớ hỗ trợ.",
          "Tìm hiểu bộ nguồn cần thiết nếu muốn dùng chế độ giám sát khi đỗ xe.",
        ],
      },
      {
        heading: "Đừng chỉ so sánh giá bán",
        paragraphs: [
          "Thông tin về bảo hành, phụ kiện đi kèm và hướng dẫn sử dụng cũng ảnh hưởng đến trải nghiệm sau khi mua. Hãy xác nhận đúng phiên bản sản phẩm và hỏi rõ các phụ kiện cần có cho xe của bạn.",
        ],
      },
      {
        heading: "Chọn nơi lắp đặt có hướng dẫn rõ ràng",
        paragraphs: [
          "Đơn vị lắp đặt nên đi dây gọn, không che khuất tầm nhìn và hướng dẫn bạn kết nối ứng dụng cũng như kiểm tra lại camera. Bạn có thể liên hệ 70mai Nha Trang để hỏi về sản phẩm và lịch lắp đặt.",
        ],
      },
    ],
  },
  {
    title:
      "Lắp Camera Hành Trình ô tô Giá Rẻ Ở Đâu? Thương Hiệu Nào Uy Tín Chất Lượng?",
    path: "/lap-camera-hanh-trinh-o-to-gia-re-o-dau-thuong-hieu-nao-uy-tin/",
    image: editorialImage("70mai-SP-A800SE-noi-bat-trang-chu-2.jpg"),
    excerpt:
      "Một vài tiêu chí giúp bạn chọn camera chính hãng và tìm điểm lắp đặt phù hợp với chiếc xe.",
    intro:
      "Khi chọn camera hành trình, hãy ưu tiên nơi cung cấp thông tin sản phẩm, chính sách hỗ trợ và quy trình lắp đặt rõ ràng. Chi phí hợp lý cần đi cùng sản phẩm đúng phiên bản và khả năng sử dụng phù hợp với xe.",
    sections: [
      {
        heading: "Nhận biết sản phẩm và dịch vụ phù hợp",
        paragraphs: [
          "Trước khi mua, xác nhận tên mẫu, cấu hình camera trước/sau, phụ kiện trong hộp và điều kiện bảo hành. Nếu báo giá có thêm bộ nguồn hoặc camera phụ, hãy hỏi rõ chức năng và khả năng tương thích.",
        ],
      },
      {
        heading: "Lắp đặt an toàn và gọn gàng",
        paragraphs: [
          "Camera nên được đặt ở vị trí có góc nhìn tốt mà không cản tầm quan sát. Dây nguồn cần được cố định gọn và tránh các khu vực ảnh hưởng đến túi khí hoặc thao tác lái xe.",
        ],
        bullets: [
          "Yêu cầu kiểm tra hình ảnh trước và sau khi hoàn tất lắp đặt.",
          "Thử kết nối ứng dụng và xem lại một đoạn ghi hình.",
          "Lưu thông tin mua hàng và kênh hỗ trợ để thuận tiện khi cần trợ giúp.",
        ],
      },
      {
        heading: "Hỏi thông tin trước khi đến cửa hàng",
        paragraphs: [
          "Tình trạng hàng và điểm lắp đặt có thể thay đổi. Hãy gọi trước để xác nhận mẫu camera, thời gian phục vụ và chi phí áp dụng cho xe của bạn.",
        ],
      },
    ],
  },
  {
    title: "Kinh nghiệm sử dụng camera hành trình bạn nên biết",
    path: "/kinh-nghiem-su-dung-camera-hanh-trinh-ban-nen-biet/",
    image: editorialImage("T800-SP-noi-bat-trang-chu-2.jpg"),
    excerpt:
      "Từ thẻ nhớ đến ứng dụng điện thoại, một số bước đơn giản giúp camera hoạt động ổn định hơn.",
    intro:
      "Sau khi lắp camera, hãy dành ít phút để làm quen với ứng dụng, kiểm tra chất lượng hình ảnh và thiết lập các chế độ ghi hình. Việc kiểm tra định kỳ giúp bạn phát hiện sớm thẻ nhớ hoặc kết nối có vấn đề.",
    sections: [
      {
        heading: "Kiểm tra thẻ nhớ định kỳ",
        paragraphs: [
          "Sử dụng thẻ nhớ phù hợp với khuyến nghị của mẫu camera. Khi ứng dụng hoặc camera báo lỗi thẻ, hãy sao lưu dữ liệu cần giữ trước khi định dạng thẻ theo hướng dẫn của nhà sản xuất.",
        ],
      },
      {
        heading: "Làm quen với ứng dụng 70mai",
        paragraphs: [
          "Kết nối điện thoại theo hướng dẫn trên ứng dụng, kiểm tra phiên bản phần mềm và thử xem lại video ngay sau khi cài đặt. Tên mạng Wi-Fi hoặc các bước kết nối có thể khác nhau giữa các dòng camera.",
        ],
      },
      {
        heading: "Dùng chế độ đỗ xe đúng cách",
        paragraphs: [
          "Một số mẫu hỗ trợ giám sát khi xe đỗ và cần bộ nguồn tương thích. Hãy kiểm tra tài liệu của đúng model, hiểu cách thiết bị tiêu thụ điện và nhờ kỹ thuật viên tư vấn trước khi lắp bộ nguồn cố định.",
        ],
      },
    ],
  },
  {
    title: "Mua camera hành trình ô tô tại Quảng Trị ở đâu uy tín chính hãng",
    path: "/camera-hanh-trinh-o-to-tai-quang-tri/",
    image: editorialImage("Camera-hanh-trinh-70mai-A210.jpg"),
    excerpt:
      "Liên hệ trước để kiểm tra sản phẩm, cách nhận hàng và điểm hỗ trợ phù hợp khi bạn ở Quảng Trị.",
    intro:
      "Nếu bạn đang tìm camera hành trình 70mai tại Quảng Trị, hãy xác nhận tình trạng sản phẩm, phương thức giao hàng và hỗ trợ lắp đặt trước khi đặt mua. Thông tin liên hệ trực tiếp giúp bạn chọn được cấu hình phù hợp với xe.",
    sections: [
      {
        heading: "Xác nhận model và phụ kiện",
        paragraphs: [
          "Nêu rõ nhu cầu ghi hình trước, sau hay nhiều kênh để được tư vấn mẫu camera và phụ kiện tương thích. Hỏi thêm về thẻ nhớ, bộ nguồn giám sát đỗ xe và cách kết nối ứng dụng.",
        ],
      },
      {
        heading: "Hỏi về giao hàng và lắp đặt",
        paragraphs: [
          "Thời gian giao hàng, phí vận chuyển và điểm lắp đặt có thể thay đổi theo khu vực. Liên hệ 70mai Nha Trang để kiểm tra phương án phục vụ tại địa chỉ của bạn trước khi đặt hàng.",
        ],
      },
      {
        heading: "Kênh tư vấn",
        paragraphs: [
          "Bạn có thể gọi hotline hoặc gửi email qua trang liên hệ để hỏi về sản phẩm chính hãng và cách nhận hỗ trợ tại Quảng Trị.",
        ],
      },
    ],
  },
];

export const UTILITY_PAGES: UtilityPageData[] = [
  {
    title: "Hướng dẫn mua hàng",
    path: "/huong-dan-mua-hang/",
    summary: "Các bước chọn sản phẩm và liên hệ 70mai Nha Trang để được hỗ trợ đặt hàng.",
    sections: [
      {
        heading: "Chọn sản phẩm phù hợp",
        paragraphs: [
          "Xác định nhu cầu ghi hình, loại xe và các tính năng bạn muốn sử dụng. Nếu cần camera sau hoặc giám sát khi đỗ xe, hãy kiểm tra phụ kiện tương thích trước khi đặt hàng.",
        ],
      },
      {
        heading: "Xác nhận đơn hàng",
        paragraphs: [
          "Liên hệ qua hotline hoặc email để xác nhận phiên bản sản phẩm, tình trạng hàng, giá bán và phương thức giao nhận áp dụng tại khu vực của bạn. Các thông tin này có thể thay đổi theo thời điểm.",
        ],
      },
      {
        heading: "Nhận tư vấn",
        paragraphs: [
          "Nếu chưa biết chọn model nào, hãy gửi tên xe và nhu cầu sử dụng qua trang liên hệ để được gợi ý cấu hình phù hợp.",
        ],
      },
    ],
  },
  {
    title: "Hướng dẫn lắp đặt",
    path: "/huong-dan-lap-dat/",
    summary: "Chuẩn bị trước khi lắp camera hành trình và kiểm tra thiết bị sau khi hoàn tất.",
    sections: [
      {
        heading: "Chọn vị trí lắp camera",
        paragraphs: [
          "Đặt camera tại vị trí có góc nhìn phù hợp, không che khuất tầm quan sát của người lái. Làm sạch bề mặt kính và tham khảo hướng dẫn của model trước khi cố định thiết bị.",
        ],
      },
      {
        heading: "Đi dây và kết nối nguồn",
        paragraphs: [
          "Dây nguồn cần được sắp xếp gọn và tránh các vị trí có túi khí hoặc bộ phận chuyển động. Nếu sử dụng bộ nguồn cho chế độ đỗ xe, nên nhờ kỹ thuật viên kiểm tra tương thích và cách bảo vệ ắc quy.",
        ],
      },
      {
        heading: "Kiểm tra trước khi sử dụng",
        paragraphs: [
          "Khởi động camera, kiểm tra góc hình, kết nối điện thoại và phát thử video. Tham khảo tài liệu đi kèm hoặc liên hệ hỗ trợ nếu các bước cài đặt khác nhau theo model.",
        ],
      },
    ],
  },
  {
    title: "Hướng dẫn sử dụng",
    path: "/huong-dan-su-dung/",
    summary: "Làm quen với ứng dụng, video đã ghi và các cài đặt cơ bản trên camera hành trình.",
    sections: [
      {
        heading: "Kết nối với điện thoại",
        paragraphs: [
          "Cài ứng dụng 70mai, bật camera và làm theo hướng dẫn ghép nối hiển thị trong ứng dụng. Tên mạng và mật khẩu mặc định có thể khác nhau theo model, vì vậy hãy xem tài liệu đi kèm thiết bị.",
        ],
      },
      {
        heading: "Xem và sao lưu video",
        paragraphs: [
          "Kiểm tra video quan trọng và sao lưu sang thiết bị khác nếu cần lưu giữ lâu dài. Dung lượng thẻ nhớ có giới hạn, vì vậy hãy quản lý các tệp đã lưu trước khi xóa hoặc định dạng thẻ.",
        ],
      },
      {
        heading: "Cập nhật và bảo quản",
        paragraphs: [
          "Dùng ứng dụng hoặc tài liệu chính thức để kiểm tra cập nhật phần mềm. Giữ camera và khu vực lắp đặt sạch, đồng thời liên hệ hỗ trợ nếu thiết bị thường xuyên báo lỗi.",
        ],
      },
    ],
  },
  {
    title: "Hướng dẫn bảo hành",
    path: "/huong-dan-bao-hanh/",
    summary: "Chuẩn bị thông tin thiết bị và liên hệ bộ phận hỗ trợ để được hướng dẫn bảo hành.",
    sections: [
      {
        heading: "Thông tin nên chuẩn bị",
        paragraphs: [
          "Khi cần hỗ trợ, hãy cung cấp tên model, số serial nếu có, thời điểm mua và mô tả tình trạng thiết bị. Hình ảnh hoặc video lỗi có thể giúp đội ngũ hỗ trợ hiểu vấn đề nhanh hơn.",
        ],
      },
      {
        heading: "Liên hệ trước khi gửi sản phẩm",
        paragraphs: [
          "Quy trình và điều kiện bảo hành phụ thuộc vào sản phẩm và hồ sơ mua hàng. Vui lòng liên hệ bộ phận bảo hành để xác nhận hướng xử lý và địa điểm tiếp nhận trước khi gửi thiết bị.",
        ],
      },
      {
        heading: "Bảo quản phụ kiện",
        paragraphs: [
          "Giữ lại hộp, phụ kiện và thông tin mua hàng nếu có thể. Không tự ý tháo rời thiết bị trước khi nhận hướng dẫn từ bộ phận kỹ thuật.",
        ],
      },
    ],
  },
  {
    title: "Giới thiệu",
    path: "/gioi-thieu/",
    summary: "70mai Nha Trang tư vấn camera hành trình và phụ kiện 70mai, hỗ trợ khách hàng tại Khánh Hòa.",
    sections: [
      {
        heading: "70mai Nha Trang",
        paragraphs: [
          "70mai Nha Trang giới thiệu các dòng camera hành trình và phụ kiện 70mai. Khách hàng có thể tìm hiểu sản phẩm, nhận tư vấn và kết nối với điểm hỗ trợ tại Nha Trang.",
        ],
      },
      {
        heading: "Hệ thống hỗ trợ",
        paragraphs: [
          "Đội ngũ hỗ trợ tư vấn lựa chọn thiết bị, hướng dẫn kết nối và tiếp nhận yêu cầu bảo hành. Hãy xem trang liên hệ để chọn kênh hỗ trợ phù hợp.",
        ],
      },
    ],
  },
  {
    title: "Bảo mật thông tin",
    path: "/bao-mat-thong-tin/",
    summary: "Thông tin liên hệ được dùng để phản hồi yêu cầu tư vấn và hỗ trợ khách hàng.",
    sections: [
      {
        heading: "Thông tin bạn cung cấp",
        paragraphs: [
          "Khi liên hệ hoặc đặt hàng, bạn có thể cung cấp tên, số điện thoại, email và thông tin cần thiết để xử lý yêu cầu. Chỉ gửi các thông tin liên quan qua kênh hỗ trợ chính thức.",
        ],
      },
      {
        heading: "Cách sử dụng thông tin",
        paragraphs: [
          "Thông tin được sử dụng để phản hồi câu hỏi, tư vấn sản phẩm và hỗ trợ đơn hàng hoặc bảo hành. Nếu bạn cần cập nhật hoặc hỏi về thông tin đã cung cấp, hãy liên hệ 70mai Nha Trang.",
        ],
      },
      {
        heading: "Liên hệ về quyền riêng tư",
        paragraphs: [
          "Để hỏi về việc sử dụng thông tin cá nhân, vui lòng gửi yêu cầu qua địa chỉ email hỗ trợ được nêu trên trang liên hệ.",
        ],
      },
    ],
  },
  {
    title: "Giao hàng - vận chuyển",
    path: "/giao-hang-van-chuyen/",
    summary: "Xác nhận phí, thời gian giao hàng và phương thức nhận trước khi hoàn tất đơn.",
    sections: [
      {
        heading: "Xác nhận địa chỉ nhận hàng",
        paragraphs: [
          "Vui lòng cung cấp địa chỉ và số điện thoại nhận hàng chính xác. Kiểm tra lại thông tin đơn hàng cùng nhân viên hỗ trợ trước khi đơn được gửi đi.",
        ],
      },
      {
        heading: "Phí và thời gian vận chuyển",
        paragraphs: [
          "Phí giao hàng và thời gian dự kiến có thể phụ thuộc vào địa chỉ, đơn vị vận chuyển và tình trạng hàng. Hãy liên hệ để xác nhận thông tin hiện hành cho đơn hàng của bạn.",
        ],
      },
      {
        heading: "Khi nhận hàng",
        paragraphs: [
          "Kiểm tra tình trạng kiện hàng và sản phẩm theo hướng dẫn nhận hàng. Nếu phát hiện vấn đề, hãy lưu lại hình ảnh và liên hệ bộ phận hỗ trợ để được hướng dẫn.",
        ],
      },
    ],
  },
  {
    title: "Bảo hành - đổi trả",
    path: "/bao-hanh-doi-tra/",
    summary: "Liên hệ hỗ trợ để xác nhận điều kiện tiếp nhận bảo hành hoặc yêu cầu đổi trả.",
    sections: [
      {
        heading: "Gửi yêu cầu hỗ trợ",
        paragraphs: [
          "Cung cấp model, số serial, thông tin mua hàng và mô tả vấn đề. Đội ngũ hỗ trợ sẽ kiểm tra hồ sơ và hướng dẫn bước tiếp theo theo chính sách áp dụng cho sản phẩm.",
        ],
      },
      {
        heading: "Điều kiện xử lý",
        paragraphs: [
          "Điều kiện tiếp nhận có thể khác nhau tùy sản phẩm, tình trạng thiết bị và thời điểm mua. Hãy xác nhận trực tiếp với bộ phận hỗ trợ trước khi gửi hàng hoặc tháo lắp thiết bị.",
        ],
      },
      {
        heading: "Giữ lại chứng từ liên quan",
        paragraphs: [
          "Lưu thông tin đơn hàng, hóa đơn hoặc trao đổi hỗ trợ để thuận tiện khi cần tra cứu. Đóng gói sản phẩm theo hướng dẫn của nhân viên tiếp nhận.",
        ],
      },
    ],
  },
  {
    title: "Thanh toán",
    path: "/thanh-toan/",
    summary: "Liên hệ để xác nhận phương thức thanh toán hiện có cho sản phẩm và địa chỉ nhận hàng.",
    sections: [
      {
        heading: "Xác nhận đơn và số tiền",
        paragraphs: [
          "Trước khi thanh toán, hãy xác nhận tên sản phẩm, số lượng, phụ kiện, phí giao hàng và tổng số tiền với kênh hỗ trợ. Giá và chương trình ưu đãi có thể thay đổi theo thời điểm.",
        ],
      },
      {
        heading: "Phương thức thanh toán",
        paragraphs: [
          "Phương thức thanh toán khả dụng có thể khác nhau theo khu vực và phương án giao nhận. Vui lòng hỏi nhân viên hỗ trợ để nhận hướng dẫn cập nhật và kiểm tra thông tin người nhận trước khi chuyển khoản.",
        ],
      },
      {
        heading: "Cần trợ giúp?",
        paragraphs: [
          "Nếu có thắc mắc về giao dịch, hãy giữ lại mã đơn hàng hoặc chứng từ thanh toán và liên hệ bộ phận hỗ trợ khách hàng.",
        ],
      },
    ],
  },
  {
    title: "Hỗ trợ khách hàng",
    path: "/ho-tro/",
    summary: "Tìm kênh hỗ trợ về sản phẩm, lắp đặt, sử dụng và bảo hành camera hành trình 70mai.",
    sections: [
      {
        heading: "Chọn đúng bộ phận",
        paragraphs: [
          "Để được hỗ trợ nhanh, hãy chuẩn bị tên model và mô tả ngắn về yêu cầu. Bạn có thể chọn hỗ trợ đại lý, bảo hành hoặc hotline trên trang liên hệ.",
        ],
      },
      {
        heading: "Hướng dẫn hữu ích",
        paragraphs: [
          "Xem hướng dẫn mua hàng, lắp đặt, sử dụng và bảo hành để tham khảo các bước thường gặp. Nếu vấn đề chưa được giải quyết, hãy gửi yêu cầu qua email hoặc gọi điện.",
        ],
      },
    ],
  },
  {
    title: "Tra cứu bảo hành",
    path: "/tra-cuu-bao-hanh/",
    summary: "Liên hệ bộ phận bảo hành để được hướng dẫn kiểm tra thông tin và tình trạng tiếp nhận thiết bị.",
    sections: [
      {
        heading: "Chuẩn bị thông tin sản phẩm",
        paragraphs: [
          "Chuẩn bị tên model, số serial nếu có, thông tin mua hàng và mô tả tình trạng cần kiểm tra. Không đăng công khai các thông tin nhận dạng thiết bị hoặc chứng từ cá nhân.",
        ],
      },
      {
        heading: "Kết nối bộ phận bảo hành",
        paragraphs: [
          "Trang tra cứu này cung cấp kênh liên hệ để kiểm tra hồ sơ; vui lòng gọi số hỗ trợ bảo hành trên trang liên hệ để được hướng dẫn trực tiếp.",
        ],
      },
    ],
  },
];

export const EDITORIAL_FOOTER_COLUMNS = [
  {
    title: "Hướng dẫn",
    links: [
      { label: "HD Mua hàng", href: "/huong-dan-mua-hang/" },
      { label: "HD lắp đặt", href: "/huong-dan-lap-dat/" },
      { label: "HD sử dụng", href: "/huong-dan-su-dung/" },
      { label: "HD bảo hành", href: "/huong-dan-bao-hanh/" },
    ],
  },
  {
    title: "Hỗ trợ khách hàng",
    links: [
      { label: "Giới thiệu", href: "/gioi-thieu/" },
      { label: "Bảo mật thông tin", href: "/bao-mat-thong-tin/" },
      { label: "Giao hàng - vận chuyển", href: "/giao-hang-van-chuyen/" },
      { label: "Bảo hành - đổi trả", href: "/bao-hanh-doi-tra/" },
      { label: "Thanh toán", href: "/thanh-toan/" },
    ],
  },
];

export const EDITORIAL_FOOTER_LINKS = [
  { label: "Tin tức", href: "/tin-tuc/" },
  ...EDITORIAL_FOOTER_COLUMNS.flatMap((column) => column.links),
];

const normalizePath = (value: string): string =>
  `/${value.trim().replace(/^\/+|\/+$/g, "")}/`;

export function getEditorialArticle(path: string): EditorialArticleData | undefined {
  const normalizedPath = normalizePath(path);
  return EDITORIAL_ARTICLES.find((article) => article.path === normalizedPath);
}

export function getUtilityPage(path: string): UtilityPageData | undefined {
  const normalizedPath = normalizePath(path);
  return UTILITY_PAGES.find((page) => page.path === normalizedPath);
}
