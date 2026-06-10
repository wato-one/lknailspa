export const sections = [
  { id: "overview", label: "Tổng quan" },
  { id: "pestel", label: "PESTEL" },
  { id: "porter", label: "Porter" },
  { id: "market-sizing", label: "Quy mô TT" },
  { id: "competitors", label: "Đối thủ" },
  { id: "swot", label: "SWOT" },
  { id: "review-insights", label: "Review" },
  { id: "consumer", label: "Khách hàng" },
  { id: "journey", label: "Hành trình mua" },
  { id: "strategy", label: "Chiến lược" },
  { id: "glossary", label: "Thuật ngữ" },
];

export const hero = {
  eyebrow: "Báo cáo nghiên cứu ngành · Santee, CA 92071",
  title: "LK Nail Salon — Phân tích thị trường Nail & Spa",
  subtitle:
    "Báo cáo tương tác về môi trường kinh doanh quanh 10769 Woodside Ave Suite 107: xu hướng ngành, đối thủ địa phương, hành vi khách hàng và đề xuất chiến lược cho salon walk-in + đặt lịch.",
  verifiedLine: "Dữ liệu đối chiếu từ GMI, Boulevard, City of Santee, CA BBC và website LK",
};

export const valueChain = [
  "Nhà cung cấp sản phẩm nail",
  "Phân phối / thương hiệu OPI, Gelish",
  "Salon độc lập địa phương",
  "Khách hàng Santee & East County",
  "Đánh giá & giới thiệu (Google/Yelp)",
];
export const valueChainHighlight = 2;

export const statCards = [
  { n: "USD 6,1B", l: "Thị trường nail Mỹ", s: "2025 · GMI" },
  { n: "60.037", l: "Dân số Santee", s: "City of Santee · 2020" },
  { n: "5,0★ / 4,5★", l: "LK Google / Yelp", s: "276 Google · 80 Yelp" },
  { n: "4,7★", l: "Sunny Nails Yelp", s: "523 review · đối thủ cao nhất" },
];

export const pestelData = [
  {
    letter: "P",
    title: "Chính trị",
    color: "#C62828",
    sourceIds: ["ca-bbc-art12"],
    items: [
      {
        headline: "Giám sát y tế & cấp phép chặt tại California",
        detail:
          "Board of Barbering and Cosmetology (BBC) yêu cầu salon tuân thủ quy trình khử trùng pedicure, thông gió và nhật ký vệ sinh. Vi phạm có thể dẫn đến phạt hành chính — đây là rào cản nhập cuộc nhưng cũng là lợi thế cho salon tuân thủ tốt như LK.",
        impact: "high",
        sourceIds: ["ca-bbc-art12"],
      },
      {
        headline: "Giấy phép kinh doanh địa phương Santee",
        detail:
          "Salon tại Woodside Ave cần business license và tuân thủ zoning thương mại East County. Thủ tục không quá phức tạp nhưng tạo chi phí cố định cho đối thủ mới.",
        impact: "insight",
        sourceIds: ["santee-city-demographics"],
      },
    ],
  },
  {
    letter: "E",
    title: "Kinh tế",
    color: "#1565C0",
    sourceIds: ["gmi-nail-salon-2025", "cpi-east-county-income"],
    items: [
      {
        headline: "Ngành nail Mỹ ~USD 6,1 tỷ, tăng trưởng ổn định",
        detail:
          "Chi tiêu làm đẹp được xem là chi phí định kỳ, không chỉ xa xỉ. Phân khúc mid-range chiếm thị phần lớn — khớp menu giá $20–$80 của LK.",
        impact: "opportunity",
        sourceIds: ["gmi-nail-salon-2025"],
      },
      {
        headline: "East County thu nhập trung vị ~USD 79.586",
        detail:
          "Khu vực Santee–El Cajon có sức mua đủ cho dịch vụ nail định kỳ 2–4 tuần/lần và gói premium (Signature, Volcano, 24K Gold).",
        impact: "opportunity",
        sourceIds: ["cpi-east-county-income"],
      },
      {
        headline: "Áp lực chi phí lao động & thiếu thợ",
        detail:
          "62% salon độc lập phụ thuộc kỹ năng thợ; BLS dự báo +5% việc làm cosmetology 2024–2034 nhưng cạnh tranh tuyển dụng gay gắt tại San Diego.",
        impact: "high",
        sourceIds: ["gmi-nail-salon-2025", "bls-cosmetologists"],
      },
    ],
  },
  {
    letter: "S",
    title: "Xã hội",
    color: "#2E7D32",
    sourceIds: ["gmi-nail-salon-2025", "santee-city-demographics"],
    items: [
      {
        headline: "Self-care & nail art lan rộng qua mạng xã hội",
        detail:
          "Khách trẻ và trung niên tìm kiếm thiết kế gel, dipping, Gel-X. LK đã có gallery và social (Facebook, Instagram) — cần đồng bộ nội dung thật thay vì placeholder.",
        impact: "opportunity",
        sourceIds: ["gmi-nail-salon-2025", "lk-company-site"],
      },
      {
        headline: "Cộng đồng gia đình Santee — dịch vụ trẻ em",
        detail:
          "Santee là thành phố 60.037 người, định hướng gia đình. Menu Kid Services ($10–$17) của LK phù hợp khách mang con theo cuối tuần.",
        impact: "insight",
        sourceIds: ["santee-city-demographics", "lk-services-pricing"],
      },
      {
        headline: "Nhu cầu vệ sinh & sản phẩm 'sạch' tăng",
        detail:
          "Khách ưu tiên salon sạch, không mùi hóa chất mạnh. BBC Article 12 và xu hướng 'health-focused nails' tạo kỳ vọng cao về pedicure log và khử trùng.",
        impact: "critical",
        sourceIds: ["ca-bbc-art12", "gmi-nail-salon-2025"],
      },
    ],
  },
  {
    letter: "T",
    title: "Công nghệ",
    color: "#6A1B9A",
    sourceIds: ["blvd-salon-stats-2025", "lk-company-site"],
    items: [
      {
        headline: "~46–50% đặt lịch ngoài giờ mở cửa",
        detail:
          "Khách đặt online khi salon đóng cửa. LK có 'Booking Now' qua NailSoft — cần tối ưu mobile và nhắc lịch tự động để không mất lead.",
        impact: "critical",
        sourceIds: ["blvd-salon-stats-2025"],
      },
      {
        headline: "Đặt lịch online giữ chân gấp đôi walk-in",
        detail:
          "Khách lần đầu đặt online có tỷ lệ quay lại lần 2 ~78% so với ~39% walk-in. Pre-book tại quầy là đòn bẩy retention cho LK.",
        impact: "high",
        sourceIds: ["salon-today-retention"],
      },
      {
        headline: "Google Maps & đánh giá quyết định discovery",
        detail:
          "71% người tiêu dùng bỏ qua doanh nghiệp dưới 3★. LK đang 5,0★ Google (276 review) — tài sản digital quan trọng nhất.",
        impact: "opportunity",
        sourceIds: ["brightlocal-reviews-2024", "lk-services-pricing"],
      },
    ],
  },
  {
    letter: "E",
    title: "Môi trường",
    color: "#00695C",
    sourceIds: ["ca-bbc-art12", "gmi-nail-salon-2025"],
    items: [
      {
        headline: "Thông gió bắt buộc theo Title 24 California",
        detail:
          "Salon phải có hệ thống thông gió đủ tiêu chuẩn — liên quan trực tiếp chất lượng không khí và an toàn hóa chất nail.",
        impact: "high",
        sourceIds: ["ca-bbc-art12"],
      },
      {
        headline: "Xu hướng sản phẩm vegan / ít độc tố",
        detail:
          "GMI ghi nhận cơ hội từ dịch vụ 'clean nails'. LK có CBD Signature — có thể mở rộng storytelling sản phẩm an toàn.",
        impact: "opportunity",
        sourceIds: ["gmi-nail-salon-2025", "lk-services-pricing"],
      },
    ],
  },
  {
    letter: "L",
    title: "Pháp lý",
    color: "#E65100",
    sourceIds: ["ca-bbc-art12"],
    items: [
      {
        headline: "Quy định khử trùng pedicure chi tiết",
        detail:
          "BBC yêu cầu nhật ký làm sạch footspa sau mỗi khách, cuối ngày và hàng tuần. Tuân thủ là điều kiện duy trì giấy phép establishment.",
        impact: "critical",
        sourceIds: ["ca-bbc-art12"],
      },
      {
        headline: "Cấm methyl methacrylate (MMA) và dụng cụ xâm lấn",
        detail:
          "Salon không được dùng MMA, dao cạy callus bằng lưỡi dao. Vi phạm gây rủi ro pháp lý và mất uy tín trên Yelp/Google.",
        impact: "high",
        sourceIds: ["ca-bbc-art12"],
      },
    ],
  },
];

export const porterData = [
  {
    force: "Đe dọa từ đối thủ mới",
    level: 3,
    levelLabel: "TRUNG BÌNH",
    color: "#1565C0",
    points: [
      "Chi phí mở salon độc lập tương đối thấp nhưng cần license BBC + lease retail tại Santee.",
      "Thị trường địa phương đã có nhiều salon (Magnolia, Town Center) — khách trung thành theo thợ.",
      "LK có lợi thế review 5★ và menu premium (24K, Volcano) khó sao chép nhanh.",
    ],
    sourceIds: ["gmi-nail-salon-2025", "yelp-lk-santee"],
  },
  {
    force: "Quyền lực nhà cung cấp",
    level: 2.5,
    levelLabel: "THẤP–TB",
    color: "#2E7D32",
    points: [
      "Nhiều thương hiệu gel, dipping, wax — salon có thể đổi nhà cung cấp.",
      "Phụ thuộc thợ giỏi hơn phụ thuộc một nhà cung cấp duy nhất.",
    ],
    sourceIds: ["gmi-nail-salon-2025"],
  },
  {
    force: "Quyền lực khách hàng",
    level: 3.5,
    levelLabel: "CAO",
    color: "#E65100",
    points: [
      "Khách Santee so sánh giá Yelp/Google trong bán kính 5–10 dặm.",
      "Chuyển salon dễ dàng; loyalty gắn với thợ cụ thể hơn thương hiệu.",
      "LK giảm rủi ro bằng combo spa + đồ uống miễn phí (cà phê Việt, wine).",
    ],
    sourceIds: ["brightlocal-reviews-2024", "lk-services-pricing"],
  },
  {
    force: "Đe dọa thay thế",
    level: 2,
    levelLabel: "THẤP",
    color: "#6A1B9A",
    points: [
      "DIY nail tại nhà và press-on tăng nhưng không thay thế pedicure spa & wax chuyên nghiệp.",
      "Gel-X/dipping vẫn cần thợ có license tại California.",
    ],
    sourceIds: ["gmi-nail-salon-2025"],
  },
  {
    force: "Cạnh tranh nội bộ",
    level: 4,
    levelLabel: "RẤT CAO",
    color: "#C62828",
    points: [
      "Mỹ có ~1,4 triệu salon tóc & nail; Santee/East County có Sunny Nails, Polish Nails, La Vie Nails cạnh tranh trực tiếp.",
      "Phân khúc mid-range ($30–$65 pedicure) là vùng chiến sôi động nhất.",
      "LK cần khác biệt hóa trải nghiệm (Signature 24K, đồ uống, booking) thay vì chỉ giá.",
    ],
    sourceIds: ["blvd-salon-stats-2025", "sunny-nails-santee", "lavie-nails-santee"],
  },
];

export const competitorData = [
  {
    name: "LK Nail Salon",
    type: "Khách hàng (độc lập)",
    installs: "N/A",
    rating: "5,0★ Google · 4,5★ Yelp",
    strengths:
      "276 review Google (discovery); nail art & spa pedicure được nhắc nhiều trên Yelp; thợ Rose/Tony được praise; khách lái từ El Cajon vì chất lượng.",
    weaknesses:
      "Yelp 4,5★ thấp hơn Sunny 4,7★; review gần đây phàn nàn rush cuối tuần & appointment bị bỏ qua; một số khách phải redo.",
    threat: 0,
    sourceIds: ["google-lk-santee", "yelp-lk-santee", "lk-company-site"],
  },
  {
    name: "La Vie Nails & Spa",
    type: "Địa phương",
    installs: "N/A",
    rating: "4,0★ Yelp (106)",
    strengths:
      "Loyalty theo thợ (Kate, Elaine, Chau); dip gel bền 6 tuần (review Cami F.); không gian sạch, thư giãn.",
    weaknesses: "Yelp thấp hơn LK Google; dip powder đôi khi chip sớm (review Jenny B.).",
    threat: 4,
    sourceIds: ["lavie-nails-santee"],
  },
  {
    name: "Sunny Nails & Spa",
    type: "Địa phương",
    installs: "N/A",
    rating: "4,7★ Yelp (523)",
    strengths: "Rating Yelp cao nhất cụm Santee; 523 review — volume lớn hơn LK 6×; giá hợp lý, gel pedicure 5 sao.",
    weaknesses: "Không cùng cluster Woodside; ít menu premium 24K/Volcano như LK.",
    threat: 4,
    sourceIds: ["yelp-sunny-santee"],
  },
  {
    name: "Polish Nails Spa LLC",
    type: "Địa phương",
    installs: "N/A",
    rating: "4,5★ Yelp (660)",
    strengths: "660 review Yelp — volume lớn nhất; Nikki được praise về chi tiết; pampering positioning.",
    weaknesses: "Rating Yelp ngang LK nhưng review count cao hơn 8× — social proof mạnh hơn.",
    threat: 4,
    sourceIds: ["yelp-polish-santee"],
  },
  {
    name: "Regal Nails (chuỗi Walmart)",
    type: "Chuỗi quốc gia",
    installs: "Hàng trăm cửa hàng",
    rating: "3,5–4,0★",
    strengths: "Giá mass-market; tiện lợi khi mua sắm; chuẩn hóa dịch vụ.",
    weaknesses: "Trải nghiệm spa hạn chế; không cạnh tranh segment luxury/local.",
    threat: 2,
    sourceIds: ["gmi-nail-salon-2025"],
  },
  {
    name: "DIY / Amazon press-on",
    type: "Thay thế",
    installs: "N/A",
    rating: "N/A",
    strengths: "Giá rẻ; tiện tại nhà.",
    weaknesses: "Không có pedicure, wax, social experience.",
    threat: 2,
    sourceIds: ["gmi-nail-salon-2025"],
  },
];

export const segments = [
  {
    name: "Phụ nữ làm việc East County",
    pct: "35–40%",
    sizeMarket: "~24.000 hộ gia đình",
    tag: "CHÍNH",
    tagColor: "#CC3366",
    profile:
      "Nữ 25–55, lái xe đến Santee/El Cajon, cần nail gọn gàng cho công việc & cuối tuần.",
    trigger: "Sự kiện, mùa hè, trước kỳ nghỉ",
    research: "Google Maps, Yelp, Instagram #nailsandiego",
    financing: "Trả trực tiếp; tip 15–20%",
    barrier: "Thời gian chờ walk-in cuối tuần",
    channel: "Đặt lịch online + Google review",
    sourceIds: ["santee-city-demographics", "brightlocal-reviews-2024"],
  },
  {
    name: "Gia đình & phụ huynh Santee",
    pct: "25–30%",
    sizeMarket: "~15.000 hộ",
    tag: "TĂNG TRƯỞNG",
    tagColor: "#2575FC",
    profile: "Phụ huynh đưa con (Kid Services), coi nail như self-care gia đình.",
    trigger: "Cuối tuần, sinh nhật, lễ",
    research: "Facebook groups Santee Happenings",
    financing: "Combo manicure + kid service",
    barrier: "An toàn vệ sinh cho trẻ",
    channel: "Walk-in Chủ nhật 10AM–5PM",
    sourceIds: ["santee-city-demographics", "lk-services-pricing"],
  },
  {
    name: "Khách premium spa",
    pct: "15–20%",
    sizeMarket: "~9.000 khách/năm tiềm năng",
    tag: "GIÁ TRỊ CAO",
    tagColor: "#2E7D32",
    profile: "Sẵn sàng trả $52–$80 pedicure (Volcano, 24K Gold, hot stone 20 phút).",
    trigger: "Stress, quà tặng, dịp đặc biệt",
    research: "Yelp photos, menu website",
    financing: "Upsell gel + wax",
    barrier: "Kỳ vọng không gian sang trọng",
    channel: "Booking trước + upsell Signature",
    sourceIds: ["lk-services-pricing", "gmi-nail-salon-2025"],
  },
  {
    name: "Nam giới & khách đa giới",
    pct: "8–12%",
    sizeMarket: "Đang tăng toàn Mỹ",
    tag: "MỚI",
    tagColor: "#6A1B9A",
    profile: "Nam giới dùng manicure cơ bản, pedicure thể thao, wax.",
    trigger: "Sức khỏe chân, sự kiện xã hội",
    research: "Google 'nail salon near me'",
    financing: "Basic manicure $20",
    barrier: "Cảm giác salon 'chỉ cho nữ'",
    channel: "Menu rõ ràng + không gian trung tính",
    sourceIds: ["gmi-nail-salon-2025"],
  },
];

export const infoSources = [
  {
    rank: "01",
    name: "Google Maps / Tìm kiếm",
    importance: 5,
    desc: "Kênh discovery số 1 cho 'nail salon Santee'.",
    detail: "LK 5,0★ Google (276) — discovery #1; nhưng Yelp 4,5★ (80) thấp hơn Sunny 4,7★ (523).",
    sourceIds: ["google-lk-santee", "yelp-lk-santee", "yelp-sunny-santee"],
  },
  {
    rank: "02",
    name: "Yelp",
    importance: 4,
    desc: "So sánh giá, ảnh thực tế, review chi tiết.",
    detail: "LK 4,5★ · 80 review Yelp — cần phản hồi review tiêu cực (appointment, rush) trong 24h.",
    sourceIds: ["yelp-lk-santee", "brightlocal-reviews-2024"],
  },
  {
    rank: "03",
    name: "Facebook cộng đồng Santee",
    importance: 4,
    desc: "Group Santee Happenings — hỏi đáp salon uy tín.",
    detail: "La Vie thường được recommend; LK cần hiện diện chủ động.",
    sourceIds: ["lavie-nails-santee"],
  },
  {
    rank: "04",
    name: "Instagram / TikTok",
    importance: 4,
    desc: "Nail art, reel before/after thúc đẩy xu hướng.",
    detail: "@lknailsalon — cơ hội showcase Gel-X, 24K Gold.",
    sourceIds: ["lk-company-site", "gmi-nail-salon-2025"],
  },
  {
    rank: "05",
    name: "Website & đặt lịch",
    importance: 5,
    desc: "lknailsalonsantee.com/booking qua NailSoft.",
    detail: "Đặt online giữ chân gấp đôi walk-in — ưu tiên CTA trên mobile.",
    sourceIds: ["lk-company-site", "salon-today-retention"],
  },
  {
    rank: "06",
    name: "Giới thiệu truyền miệng",
    importance: 5,
    desc: "Bạn bè, đồng nghiệp, thợ yêu thích.",
    detail: "62% salon độc lập phụ thuộc repeat & referral.",
    sourceIds: ["gmi-nail-salon-2025"],
  },
];

export const journeyStages = [
  {
    num: "01",
    title: "KÍCH HOẠT",
    subtitle: "Nhu cầu xuất hiện",
    duration: "0–3 ngày",
    icon: "💅",
    color: "#CC3366",
    bgColor: "rgba(204, 51, 102, 0.08)",
    triggers: [
      { label: "Sự kiện / lễ", desc: "Đám cưới, party, holiday", pct: "30%" },
      { label: "Móng/t da kém", desc: "Gãy gel, cuticle khô", pct: "40%" },
      { label: "Self-care", desc: "Giảm stress cuối tuần", pct: "30%" },
    ],
    clientBehavior:
      "Khách Santee mở Google Maps tìm 'nail salon near Woodside Ave' hoặc hỏi group Facebook. LK nên có Google Business Profile đầy đủ giờ (sửa lỗi 7AM trên web).",
    sourceIds: ["brightlocal-reviews-2024", "lk-company-site"],
  },
  {
    num: "02",
    title: "TÌM HIỂU",
    subtitle: "So sánh salon",
    duration: "15–45 phút",
    icon: "🔍",
    color: "#2575FC",
    bgColor: "rgba(37, 117, 252, 0.08)",
    triggers: [
      { label: "Đọc review", desc: "★ rating & số lượng", pct: "50%" },
      { label: "Xem giá menu", desc: "Classic vs Signature", pct: "30%" },
      { label: "Khoảng cách", desc: "Drive-time Santee", pct: "20%" },
    ],
    clientBehavior:
      "LK thắng Google 5★ nhưng khách so Yelp: Sunny 4,7★ (523), Polish 4,5★ (660). Menu premium $20–$65 vẫn là differentiator.",
    sourceIds: ["google-lk-santee", "yelp-sunny-santee", "yelp-polish-santee", "lk-services-pricing"],
  },
  {
    num: "03",
    title: "QUYẾT ĐỊNH",
    subtitle: "Walk-in hoặc booking",
    duration: "1–5 phút",
    icon: "📅",
    color: "#2E7D32",
    bgColor: "rgba(46, 125, 50, 0.08)",
    triggers: [
      { label: "Đặt online", desc: "Ngoài giờ mở cửa", pct: "46%" },
      { label: "Gọi (619) 579-8738", desc: "Hỏi chỗ trống", pct: "25%" },
      { label: "Walk-in", desc: "Thứ 7 / Chủ nhật", pct: "35%" },
    ],
    clientBehavior:
      "Nút 'Booking Now' trên site là critical. Pre-book lần 2 ngay tại checkout cho khách walk-in để tăng retention.",
    sourceIds: ["blvd-salon-stats-2025", "salon-today-retention", "lk-company-site"],
  },
  {
    num: "04",
    title: "TRẢI NGHIỆM",
    subtitle: "Tại salon",
    duration: "45–120 phút",
    icon: "✨",
    color: "#6A1B9A",
    bgColor: "rgba(106, 27, 154, 0.08)",
    triggers: [
      { label: "Upsell gel/wax", desc: "Deluxe → Signature", pct: null },
      { label: "Đồ uống miễn phí", desc: "Cà phê Việt, wine", pct: null },
      { label: "Kid service", desc: "Trẻ 7 tuổi trở xuống", pct: null },
    ],
    clientBehavior:
      "LK khác biệt bằng combo spa (24K Gold, hot stone 20 phút) và đồ uống. Tuân thủ BBC pedicure log để tránh rủi ro review tiêu cực về vệ sinh.",
    sourceIds: ["lk-services-pricing", "ca-bbc-art12"],
  },
  {
    num: "05",
    title: "SAU DỊCH VỤ",
    subtitle: "Giữ chân & giới thiệu",
    duration: "2–4 tuần",
    icon: "🔄",
    color: "#E65100",
    bgColor: "rgba(230, 81, 0, 0.08)",
    triggers: [
      { label: "Fill-in gel/acrylic", desc: "Chu kỳ 2–3 tuần", pct: "45%" },
      { label: "Review Google", desc: "Nếu hài lòng", pct: "20%" },
      { label: "Referral", desc: "Giới thiệu bạn", pct: "35%" },
    ],
    clientBehavior:
      "Gửi SMS/email nhắc fill-in; yêu cầu review sau 24h; tích điểm cho lần Signature tiếp theo. Mục tiêu first→second visit ≥60%.",
    sourceIds: ["salon-today-retention", "gmi-nail-salon-2025"],
  },
];

export const strategyData = [
  {
    priority: 1,
    title: "Sửa digital foundation & giờ mở cửa",
    rationale:
      "Website hiển thị 'Mon–Sat 9AM–7AM' (lỗi) và testimonial placeholder — ảnh hưởng trust trước khi khách đến.",
    actions: [
      "Chuẩn hóa giờ trên web, Google Business, Yelp (Đóng Thứ Ba; CN 10AM–5PM).",
      "Thay testimonial Lorem ipsum bằng review thật từ Google.",
      "Đảm bảo NAP nhất quán: 10769 Woodside Ave Ste 107.",
    ],
    sourceIds: ["lk-company-site", "brightlocal-reviews-2024"],
  },
  {
    priority: 2,
    title: "Tối đa hóa đặt lịch online & pre-book",
    rationale:
      "46%+ booking ngoài giờ; online first-visit retention ~2× walk-in.",
    actions: [
      "CTA 'Đặt lịch' trên mọi trang social; link deep tới /booking.",
      "Train thợ pre-book lần 2 tại checkout.",
      "Bật nhắc SMS 24h trước appointment.",
    ],
    sourceIds: ["blvd-salon-stats-2025", "salon-today-retention"],
  },
  {
    priority: 3,
    title: "Khai thác menu premium & upsell",
    rationale:
      "Phân khúc mid-range chiếm USD 16,5B toàn cầu; LK đã có Signature 24K ($65–$80) nhưng cần bán chủ động.",
    actions: [
      "Script upsell Classic → Volcano/24K khi khách hỏi 'pedicure đặc biệt'.",
      "Ảnh before/after trên Instagram cho Gel-X ($62) và dipping ($45).",
      "Gói combo wax + pedicure cuối tuần.",
    ],
    sourceIds: ["gmi-nail-salon-2025", "lk-services-pricing"],
  },
  {
    priority: 4,
    title: "Củng cố uy tín vệ sinh (BBC compliance)",
    rationale:
      "Vệ sinh là yếu tố #1 trong review tiêu cực nail salon tại CA.",
    actions: [
      "Duy trì pedicure cleaning log công khai khi khách hỏi.",
      "Đào tạo thợ Article 12; kiểm tra hàng tuần.",
      "Storytelling 'sạch & thư giãn' trên web — khớp positioning hiện tại.",
    ],
    sourceIds: ["ca-bbc-art12", "gmi-nail-salon-2025"],
  },
  {
    priority: 5,
    title: "Tăng volume Yelp & xử lý review tiêu cực",
    rationale:
      "Yelp 80 review vs Polish 660; review Jun 2026 phàn nàn appointment bị bỏ qua — ảnh hưởng trust khi khách so sánh.",
    actions: [
      "Yêu cầu khách hài lòng review Yelp (QR tại quầy) — mục tiêu 150+ review trong 6 tháng.",
      "Owner response công khai cho review 1–3★ trong 24h — giải thích SOP appointment.",
      "SOP cuối tuần: ưu tiên appointment đã book trước walk-in.",
    ],
    sourceIds: ["yelp-lk-santee", "yelp-polish-santee", "brightlocal-reviews-2024"],
  },
  {
    priority: 6,
    title: "Hiện diện cộng đồng Santee",
    rationale:
      "Facebook groups ảnh hưởng quyết định địa phương; La Vie được recommend organicaly.",
    actions: [
      "Tham gia Santee Happenings — trả lời hỏi salon (không spam).",
      "Sponsor nhỏ sự kiện City of Santee / local school.",
      "Ưu đãi referral: $5 off cho khách giới thiệu bạn mới.",
    ],
    sourceIds: ["lavie-nails-santee", "santee-city-demographics"],
  },
];

export const swotData = {
  intro:
    "Phân tích SWOT tập trung vào LK Nail Salon — tổng hợp từ PESTEL, Porter, đối thủ và dữ liệu website.",
  quadrants: [
    {
      key: "strengths",
      label: "Điểm mạnh (S)",
      color: "#2E7D32",
      items: [
        {
          headline: "Google 5,0★ (276 review) — lợi thế discovery",
          detail:
            "Embed Google trên website LK xác nhận 5,0★. Tuy nhiên Yelp chỉ 4,5★ (80 review) — thấp hơn Sunny 4,7★ (523).",
          sourceIds: ["google-lk-santee", "yelp-lk-santee", "yelp-sunny-santee"],
        },
        {
          headline: "Menu premium đa tầng ($20–$80)",
          detail:
            "Signature 24K Gold ($65–$80), Volcano Detox ($52–$67), Gel-X ($62), dipping ($45) — khớp phân khúc mid-range đang dẫn dắt thị trường.",
          sourceIds: ["lk-services-pricing", "gmi-nail-salon-2025"],
        },
        {
          headline: "Đặt lịch online qua NailSoft",
          detail:
            "Website có 'Booking Now' — kênh giữ chân tốt hơn walk-in (~78% vs ~39% quay lại lần 2).",
          sourceIds: ["lk-company-site", "salon-today-retention"],
        },
        {
          headline: "Trải nghiệm spa & gia đình",
          detail:
            "Đồ uống miễn phí (cà phê Việt, wine); Kid Services $10–$17 — phù hợp cộng đồng gia đình Santee 60.037 dân.",
          sourceIds: ["lk-services-pricing", "santee-city-demographics"],
        },
      ],
    },
    {
      key: "weaknesses",
      label: "Điểm yếu (W)",
      color: "#C62828",
      items: [
        {
          headline: "Nội dung website chưa hoàn thiện",
          detail:
            "Testimonial section vẫn dùng Lorem ipsum — giảm trust trước khi khách đến salon.",
          sourceIds: ["lk-company-site"],
        },
        {
          headline: "Lỗi giờ mở cửa trên web",
          detail:
            "Hiển thị 'Mon–Sat 9:00 AM–7:00 AM' (sai) — gây nhầm lẫn khi khách đối chiếu Google/Yelp.",
          sourceIds: ["lk-company-site"],
        },
        {
          headline: "Chênh lệch Google vs Yelp & volume review",
          detail:
            "Yelp 80 review vs Polish 660 / Sunny 523 — social proof Yelp yếu hơn đối thủ dù Google cao.",
          sourceIds: ["yelp-lk-santee", "yelp-polish-santee", "yelp-sunny-santee"],
        },
        {
          headline: "Inconsistency & appointment workflow",
          detail:
            "Review Yelp May–Jun 2026: redo trong ngày, rush cuối tuần, appointment bị walk-in chen — cần SOP rõ.",
          sourceIds: ["yelp-lk-santee"],
        },
      ],
    },
    {
      key: "opportunities",
      label: "Cơ hội (O)",
      color: "#1565C0",
      items: [
        {
          headline: "Thị trường nail tăng ~8% CAGR",
          detail:
            "Chi tiêu làm đẹp được xem là định kỳ; TAM Santee ước tính $4,5–6,5M/năm với dân số ổn định.",
          sourceIds: ["gmi-nail-salon-2025", "santee-city-demographics"],
        },
        {
          headline: "Tối ưu booking ngoài giờ",
          detail:
            "46%+ đặt lịch khi salon đóng — mở rộng CTA mobile và nhắc SMS tăng volume không cần thêm giờ mở cửa.",
          sourceIds: ["blvd-salon-stats-2025", "lk-company-site"],
        },
        {
          headline: "Upsell mid-range & premium",
          detail:
            "Phân khúc mid-range USD 16,5B toàn cầu; script Classic → Volcano/24K và combo wax + pedicure cuối tuần.",
          sourceIds: ["gmi-nail-salon-2025", "lk-services-pricing"],
        },
        {
          headline: "Hiện diện cộng đồng Santee",
          detail:
            "Facebook groups (Santee Happenings) ảnh hưởng chọn salon — La Vie được recommend; LK có thể tham gia chủ động.",
          sourceIds: ["lavie-nails-santee", "santee-city-demographics"],
        },
      ],
    },
    {
      key: "threats",
      label: "Đe dọa (T)",
      color: "#E65100",
      items: [
        {
          headline: "Sunny & Polish vượt LK trên Yelp",
          detail:
            "Sunny 4,7★ (523), Polish 4,5★ (660) so với LK 4,5★ (80) — khách research Yelp thấy đối thủ mạnh hơn.",
          sourceIds: ["yelp-sunny-santee", "yelp-polish-santee", "yelp-lk-santee"],
        },
        {
          headline: "Khách hàng dễ chuyển salon",
          detail:
            "Switching cost thấp — loyalty gắn thợ cụ thể; một trải nghiệm kém có thể mất khách vĩnh viễn.",
          sourceIds: ["brightlocal-reviews-2024", "gmi-nail-salon-2025"],
        },
        {
          headline: "Áp lực chi phí lao động",
          detail:
            "Thiếu thợ có license; BLS +5% việc làm cosmetology nhưng cạnh tranh tuyển dụng tại San Diego East County.",
          sourceIds: ["gmi-nail-salon-2025", "bls-cosmetologists"],
        },
        {
          headline: "Rủi ro pháp lý vệ sinh (BBC)",
          detail:
            "Vi phạm Article 12 (pedicure log, khử trùng) → phạt hành chính và review tiêu cực lan nhanh trên Google.",
          sourceIds: ["ca-bbc-art12", "brightlocal-reviews-2024"],
        },
      ],
    },
  ],
};

export const reviewInsightsData = {
  intro:
    "Phân tích review crawl từ Google (embed website LK) và Yelp (Firecrawl 06/2026) — 4 salon chính Santee. Dữ liệu hỗ trợ SWOT, đối thủ và chiến lược.",
  crawledAt: "06/2026",
  platformNote:
    "Google Maps không crawl được full text (login wall). Google rating LK lấy từ embed trên lknailsalonsantee.com/services.",
  comparison: [
    {
      salon: "LK Nail Salon",
      google: { rating: "5,0", count: 276, sourceId: "google-lk-santee" },
      yelp: { rating: "4,5", count: 80, sourceId: "yelp-lk-santee" },
      highlight: "Google cao nhất; Yelp volume thấp nhất trong nhóm",
    },
    {
      salon: "Sunny Nails & Spa",
      google: { rating: "—", count: null, sourceId: null },
      yelp: { rating: "4,7", count: 523, sourceId: "yelp-sunny-santee" },
      highlight: "Rating Yelp cao nhất (4,7★)",
    },
    {
      salon: "Polish Nails Spa",
      google: { rating: "—", count: null, sourceId: null },
      yelp: { rating: "4,5", count: 660, sourceId: "yelp-polish-santee" },
      highlight: "Volume Yelp lớn nhất (660)",
    },
    {
      salon: "La Vie Nails & Spa",
      google: { rating: "—", count: null, sourceId: null },
      yelp: { rating: "4,0", count: 106, sourceId: "lavie-nails-santee" },
      highlight: "Loyalty theo thợ — Kate, Elaine, Chau",
    },
  ],
  lkThemes: {
    positive: [
      {
        theme: "Sạch sẽ & thư giãn",
        mentions: "Rose, Justacia V., Sherry E.",
        quote: "The salon is very clean and relaxing.",
        author: "Rose",
        sourceIds: ["yelp-lk-santee"],
      },
      {
        theme: "Nail art & thiết kế custom",
        mentions: "Ange F., Tony",
        quote: "They can do any design you want — nail art is their specialty.",
        author: "Ange F.",
        sourceIds: ["yelp-lk-santee"],
      },
      {
        theme: "Walk-in & loyalty",
        mentions: "Lyndsey K., Christina W.",
        quote: "Been coming since they opened — worth the drive from El Cajon.",
        author: "Christina W.",
        sourceIds: ["yelp-lk-santee"],
      },
    ],
    negative: [
      {
        theme: "Chất lượng không đồng nhất",
        mentions: "Alexa D. (May 2026)",
        quote: "Had to come back next day for a redo — polish chipped same day.",
        author: "Alexa D.",
        sourceIds: ["yelp-lk-santee"],
      },
      {
        theme: "Rush cuối tuần & appointment",
        mentions: "alex r. (Jun 2026)",
        quote: "Booked appointment but walk-ins got in first; felt rushed on Saturday.",
        author: "alex r.",
        sourceIds: ["yelp-lk-santee"],
      },
      {
        theme: "Suy giảm chất lượng gần đây",
        mentions: "alex r.",
        quote: "Quality has gone down over the past year compared to before.",
        author: "alex r.",
        sourceIds: ["yelp-lk-santee"],
      },
    ],
    topMentioned: ["Nail Art Designs", "Spa Pedicure", "Acrylic", "Gel Manicure"],
  },
  implications: [
    {
      headline: "Google ≠ Yelp — cần chiến lược đa nền tảng",
      detail:
        "LK thắng discovery trên Google (5,0★) nhưng thua Sunny trên Yelp rating và thua Polish/Sunny về volume review.",
      supports: ["SWOT", "Đối thủ"],
      sourceIds: ["google-lk-santee", "yelp-lk-santee", "yelp-sunny-santee", "yelp-polish-santee"],
    },
    {
      headline: "Điểm mạnh thực tế: nail art + spa pedicure",
      detail:
        "Yelp 'Most mentioned' khớp menu premium LK — nên showcase trên Instagram & Google Photos.",
      supports: ["Chiến lược", "SWOT Strengths"],
      sourceIds: ["yelp-lk-santee", "lk-services-pricing"],
    },
    {
      headline: "Rủi ro vận hành: appointment vs walk-in",
      detail:
        "Review Jun 2026 — cần SOP ưu tiên appointment cuối tuần và owner response trên Yelp.",
      supports: ["SWOT Weaknesses", "Chiến lược"],
      sourceIds: ["yelp-lk-santee", "brightlocal-reviews-2024"],
    },
  ],
};

export const sectionHints = {
  overview: [
    { term: "TAM", def: "Tổng thị trường tiềm năng — ước tính doanh thu nail tại Santee." },
    { term: "Mid-range", def: "Phân khúc giá trung — $30–$65, phù hợp menu LK." },
    { term: "Walk-in", def: "Khách không đặt trước — chiếm ~35% quyết định cuối tuần." },
  ],
  pestel: [
    { term: "BBC", def: "California Board of Barbering and Cosmetology — cơ quan cấp phép." },
    { term: "PESTEL", def: "Khung phân tích 6 yếu tố vĩ mô." },
    { term: "Article 12", def: "Quy định y tế & an toàn salon tại CA." },
  ],
  porter: [
    { term: "Porter 5 Forces", def: "Khung phân tích cạnh tranh ngành." },
    { term: "Switching cost", def: "Chi phí chuyển salon — thấp với khách nail địa phương." },
    { term: "Fragmentation", def: "Ngành phân mảnh — 62% salon độc lập." },
  ],
  competitors: [
    { term: "Threat level", def: "Mức đe dọa 1–5 so với LK tại Santee." },
    { term: "Differentiation", def: "Điểm khác biệt — 24K Gold, đồ uống, 5★ Google." },
  ],
  swot: [
    { term: "SWOT", def: "Strengths, Weaknesses, Opportunities, Threats — ma trận nội bộ + môi trường cho LK." },
    { term: "SO chiến lược", def: "Kết hợp Điểm mạnh + Cơ hội — ví dụ: 5★ Google + upsell premium." },
    { term: "WT rủi ro", def: "Kết hợp Điểm yếu + Đe dọa — ví dụ: web lỗi + cạnh tranh cao → mất khách discovery." },
  ],
  "review-insights": [
    { term: "Sentiment", def: "Phân tích cảm xúc từ review — positive/negative themes." },
    { term: "Social proof", def: "Số lượng & chất lượng review ảnh hưởng quyết định — Polish 660 vs LK 80 Yelp." },
    { term: "Multi-platform", def: "Khách so sánh Google và Yelp — không thể chỉ tối ưu một kênh." },
  ],
  consumer: [
    { term: "Segment", def: "Nhóm khách có hành vi & nhu cầu tương tự." },
    { term: "AOV", def: "Giá trị đơn trung bình — $35–$55 ước tính LK." },
  ],
  journey: [
    { term: "Path to Purchase", def: "Hành trình từ nhu cầu đến tái mua." },
    { term: "Pre-book", def: "Đặt lịch lần tiếp theo ngay tại quầy." },
  ],
  "market-sizing": [
    { term: "CAGR", def: "Tốc độ tăng trưởng kép hàng năm." },
    { term: "Bottom-up", def: "Ước tính TAM từ dân số × tần suất × giá." },
  ],
  strategy: [
    { term: "Retention", def: "Tỷ lệ khách quay lại — mục tiêu first→second ≥60%." },
    { term: "Upsell", def: "Bán thêm gói cao cấp hơn trong cùng visit." },
  ],
};
