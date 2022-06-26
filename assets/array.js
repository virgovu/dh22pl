var typeOfQuez = [
    ['bas', 'bas'],
    ['bas', 'txt'],
    ['bas', 'txt'], //03
    ['bas', 'bas'], //04
    ['pic', 'txt'], //05
    ['pic', 'bas'], //06
    ['bas', 'bas'], //07
    ['bas', 'bas'], //08
    ['bas', 'bas'], //09
    ['bas', 'bas'], //10
    ['bas', 'bas'], //11
    ['pic', 'bas'], //12
    ['pic', 'txt'], //13
    ['bas', 'bas'], //14
    ['pic', 'bas'], //15
    ['bas', 'bas'], //16
    ['bas', 'bas'], //17
    ['bas', 'bas'], //18
    ['bas', 'bas'], //19
    ['bas', 'bas'] //20
];

var questions = [
    ['<span>1. Hãy cho biết tên bài thơ:</span><br>“Không có việc gì khó</br>Chỉ sợ lòng không bền</br>Đào núi và lấp biển</br>Quyết chí ắt làm nên”'],
    ['<span>2. Vào thời nhà Lý, Kinh đô nước ta đã được chuyển từ địa điểm nào tới địa điểm nào? Nêu tên địa danh đó và thời gian cụ thể?</span>'], 
    ['<span>3. Đây là tác phẩm nào? Do ai sáng tác?</span><br><strong>Bước tới Đèo Ngang, bóng xế tà,<br>Cỏ cây chen đá, lá chen hoa.<br>Lom khom dưới núi, tiều vài chú,<br>Lác đác bên sông, chợ mấy nhà.<br>Nhớ nước, đau lòng, con quốc quốc,<br>Thương nhà mỏi miệng, cái gia gia.<br>Dừng chân đứng lại, trời, non, nước,<br>Một mảnh tình riêng, ta với ta.<br></strong>'], //03
    ['<span>4. Tác phẩm nào sau đây được xem là bản Tuyên ngôn độc lập đầu tiên của nước ta trong lịch sử?</span>'], //04
    ['<span>5. Đây là tên cầu thủ nào?</span>', './assets/imgs/5'], //05
    ['<span>6. HLV Park Hang Seo dẫn đắt ĐTQG Việt Nam từ năm nào?</span>', './assets/imgs/6'], //06
    ['<span>7. Hồ nước tự nhiên nào lớn nhất Việt Nam?<span>', './assets/imgs/a.png'], //07
    ['<span>8. Huy hiệu Đoàn Thanh niên cộng sản Hồ Chí Minh bao nhiêu màu? Đó là những màu gì?</span>', ''], //08
    ['<span>9. Đoàn Thanh niên Cộng sản Hồ Chí Minh do ai sáng lập?</span>', ''], //09
    ['<span>10. Người Đoàn viên TNCS Hồ Chí Minh đầu tiên là ai?</span>', ''], //10
    ['<span>11. Chiến dịch giải phóng Sài Gòn – Gia Định còn có tên gọi khác là gì?</span>', ''], //11
    ['<span>12. Hình ảnh dưới đây là Đại tá Bùi Quang Thận, ông là người đã gắn liền với sự kiện lịch sử nào sau đây trong chiến dịch Hồ Chí Minh?</span>', './assets/imgs/12'], //12
    ['<span>13. Đây là sự kiện gì?</span>', './assets/imgs/13'], //13
    ['<span>14. Lãnh thổ Liên bang Nga trải dài trên bao nhiêu múi giờ?</span>', ''], //14
    ['<span>15. Đây là địa danh nào?</span>', './assets/imgs/15'], //15
    ['<span>16. Ngày 21-6-1925 Nguyễn Ái Quốc sáng lập và trực tiếp chỉ đạo xuất bản tờ báo _____, đó là cơ quan của Hội Việt Nam Cách mạng thanh niên, chính thức đặt nền móng cho báo chí cách mạng Việt Nam.</span>', ''], //16
    ['<span>17. Hội nghị Ianta diễn ra vào tháng 2/1945 có sự góp mặt của 3 cường quốc, đó là những nước nào?</span>', ''], //17
    ['<span>18. Sự kiện nào buộc Mỹ phải tham chiến trong chiến tranh thế giới lần 2?</span>', ''], //18
    ['<span>19. Ai là người Việt Nam từng từ chối giải Nobel Hoà bình năm 1973?</span>', ''], //19
    ['<span>20. Đây là những giai điệu trong bài hát nào?</span><br><strong style="font-size: 80%">"Đêm nay trên đường hành quân ra mặt trận,<br>trùng trùng đoàn quân tiến bước theo con đường của Bác.<br>Nở ngàn hoa chiến công ta dâng lên Người.<br>Dâng lên tới Đảng cả niềm tin chiếu sáng ngời.<br>Cờ sao quyết thắng lấp lánh soi sáng đường cháu đi.<br>Đi ta đi giải phóng miền Nam khi quê hương nhà vẫn còn bóng quân xâm lược,<br>thì ta còn chiến đấu quét sạch nó đi.<br>Lời Bác thúc giục chúng ta, chiến đấu cho quê nhà Nam Bắc hòa lời ca."</strong><br><br><iframe style="opacity: .2;" src="./assets/m.mp3" title="bgrMS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', ''] //20
];

var answers = [
    ['Nhất trí', 'Đồng chí', 'Thanh niên làm theo lời bác', 'Khuyên thanh niên', 3, 0, 1, 2],
    ['<p style="font-size: 30px">Năm 1010, vua Lý Thái Tổ quyết định dời đô từ Hoa Lư về Đại La (Sau này là thành Thăng Long).</p>'],
    ['Qua Đèo Ngang, Bà Huyện Thanh Quan'], //03
    ['Nam quốc sơn hà', 'Bình Ngô đại cáo', 'Hịch Tướng sĩ', 'Tuyên ngôn độc lập', 0, 1, 2, 3], //04
    ['Văn Hậu'], //05
    ['2016', '2017', '2018', '2019', 1, 2, 3, 0], //06
    ['Hồ Ba Bể, Bắc Kạn','Hồ Dầu Tiếng - Tây Ninh','Hồ Lắk,Đắk Lắk','Hồ Biển Lạc, Bình Thuận', 0, 1, 2, 3], //07
    ['1','2','3','4', 3, 0, 1, 2], //08
    ['Chủ tịch Hồ Chí Minh','Đảng Cộng sản Việt Nam','Cả A và B đều sai','Cả A và B đều đúng', 3, 0, 1, 2], //09
    ['Lý Tự Trọng','Nguyễn Văn Trỗi','Võ Nguyên Giáp','Phan Bội Châu', 0, 1, 2, 3], //10
    ['Chiến dịch Đường 14-Phước Long','Chiến dịch Tây Nguyên','Chiến dịch Hồ Chí Minh','Chiến dịch Điện Biên Phủ', 2, 3, 1, 0], //11
    ['Người lính đầu tiên cắm lá cờ chiến thắng trên nóc Dinh Độc Lập','Người lính đầu tiên lái xe tăng húc đổ cổng Dinh Độc Lập.','Người lính đã bắn chết vị tổng thống cuối cùng chính quyền Mỹ-Ngụy','Đáp án khác', 0, 1, 2, 3], //12
    ['Chiến thắng Điện Biên Phủ'], //13
    ['8', '9', '10','11', 1, 2, 3, 0], //14
    ['Cung điện Mùa Thu','Cung điện Mùa Hè','Cung điện mùa Đông','Quảng trường Đỏ', 2, 1, 0, 3], //15
    ['Thanh niên','Tranh đấu','Người cùng khổ','Giải phóng', 0, 1, 2, 3], //16
    ['Liên Xô, Mỹ, Anh','Anh, Pháp, Mỹ','Mỹ, Anh, Đức','Liên Xô, Mỹ, Pháp', 0, 1, 2, 3], //17
    ['Trân Châu Cảng','Mỹ thả bom nguyên tử xuống 2 thành phố của Nhật Bản','Đức tấn công Liên Xô','Đức tấn công Anh, Pháp', 0, 1, 2, 3], //18
    ['Nguyễn Thị Bình','Lê Đức Thọ','Hồ Chí Minh','Võ Nguyên Giáp', 1, 2, 0, 3], //19
    ['Bác đang cùng chúng cháu hành quân', 'Nối vòng tay lớn', 'Giải phóng quân ta đi', 'Như có Bác Hồ trong ngày vui đại thắng', 0, 1, 2, 3] //20
];


var expzz = [
    ['Trung tuần tháng 9 năm 1950, trên đường đi chiến dịch Biên giới, Chủ tịch Hồ Chí Minh ghé thăm một đơn vị thanh niên xung phong đang làm đường phục vụ chiến dịch, Người đã làm bài thơ này tặng thanh niên. Qua bốn câu thơ, Bác muốn nhắn nhủ với thanh niên phải chú trọng đến việc bồi dưỡng về chí khí cách mạng. Người cho rằng, thanh niên muốn thực hiện ước mơ, hoài bão cao đẹp, muốn làm được việc lớn ích quốc lợi dân thì trước hết thanh niên phải tự mình nâng cao chí khí, tuyệt đối trung với nước, với Đảng, hiếu với dân, nhiệm vụ nào cũng hoàn thành, khó khăn nào cũng vượt qua, kẻ thù nào cũng đánh thắng.'], //01
    ['Vào thời vua Lý Thái Tổ, Kinh đô được dời từ Hoa Lư về thành Đại La vào tháng 7 năm 1010 và thành này được đổi tên thành Thăng Long, mở đầu cho sự phát triển lâu dài của nhà Lý tồn tại 216 năm.'], //02
    ['Bà Huyện Thanh Quan tên thật là Nguyễn Thị Hinh. Bà là một trong số nữ sĩ tài danh hiếm có trong lịch sử phong kiến Việt Nam.<br>“Qua đèo ngang” là một bài thơ thất ngôn bát cú Đường luật (gồm 8 câu, mỗi câu 7 chữ). Bài thơ tả cảnh Đèo Ngang lúc xế tà và nói lên nỗi buồn cô đơn, nỗi nhớ nhà thương nước của một người con hiến mình cho tổ quốc.'], //03
    ['Vào năm 1077, quân Tống do Quách Quỳ chỉ huy xâm lược nước ta. Vua Lí Nhân Tông sai Lí Thường Kiệt đem quân chặn giặc ở phòng tuyến sông Như Nguyệt, bỗng một đêm, quân sĩ nghe từ trong đền thờ hai anh em Trương Hống và Trương Hát có tiếng ngâm bài thơ này.<br>Nam Quốc Sơn Hà từ khi ra đời cho đến nay vẫn luôn được đánh giá là bản tuyên ngôn độc lập đầu tiên của dân tộc, khẳng định chủ quyền về lãnh thổ của đất nước và nêu cao ý chí bảo vệ chủ quyền đó trước mọi kẻ thù xâm lược.'], //04
    ['Đoàn Văn Hậu là một cầu thủ chuyên nghiệp của bóng đá Việt Nam chơi ở vị trí hậu vệ trái cho CLB Hà Nội và đội tuyển quốc gia Việt Nam. Anh được gọi vào đội tuyển khi mới 18 tuổi và trở thành cầu thủ trẻ nhất tuyển Việt Nam năm 2017.'], //05
    ['Vào ngày 11/10/2017, HLV Park Hang Seo chính thức trở thành HLV trưởng của ĐT U23 Việt Nam và ĐTQG Việt Nam.<br>Sau khi cùng Đội tuyển bóng đá U-23 Việt Nam giành được huy chương đồng tại giải M-150 Cup 2017, ông tiếp tục dẫn dắt đội tuyển đến trận chung kết tại Giải vô địch bóng đá U-23 châu Á 2018 và đứng thứ 4 bóng đá nam tại Đại hội Thể thao châu Á 2018. Ông cũng giúp Đội tuyển bóng đá quốc gia Việt Nam giành chức vô địch của Giải vô địch bóng đá Đông Nam Á năm 2018 sau 10 năm từ 2008, đồng thời lọt vào vòng tứ kết Cúp bóng đá châu Á 2019 và giành vị trí Á quân Cúp Nhà vua Thái Lan 2019. Ông còn giúp Đội tuyển U-22 Việt Nam giành được huy chương vàng đầu tiên sau hơn 60 năm tại SEA Games 30, và vào đến vòng loại thứ 3 World Cup 2022 khu vực châu Á. Mới đây nhất, ông cũng vừa giúp ĐT U23 Việt Nam bảo vệ thành công chức vô địch SEA Games 31 ngay tại nước nhà.'], //06
    ['Hồ Ba Bể 6,5 km² Ba Bể là một hồ nước ngọt thuộc địa phận tỉnh Bắc Kạn, là hồ nước ngọt tự nhiên lớn nhất Việt Nam và thuộc top 100 hồ nước ngọt tự nhiên lớn nhất Thế giới.'], //07
    ['Huy hiệu Đoàn Thanh niên Cộng sản Hồ Chí Minh là biểu trưng do Trung ương Đoàn Thanh niên Cộng sản Hồ Chí Minh ban hành để đại diện cho tổ chức thanh niên của Việt Nam. Hoạ sĩ Huỳnh Văn Thuận là người thiết kế ban đầu của huy hiệu. Đoàn huy có hình tròn, ở giữa hình ảnh một cánh tay nắm chắc lá cờ Việt Nam đi lên trên nền sọc chéo xanh lá và trắng, có vòng ngoài là dòng chữ "Đoàn Thanh niên Cộng sản Hồ Chí Minh". Huy hiệu có bốn màu là xanh lá, đỏ, vàng, trắng.'], //08
    ['Đoàn TNCS Hồ Chí Minh là tổ chức chính trị – xã hội lớn nhất của thanh niên Việt Nam. Tổ chức này do Đảng Cộng sản Việt Nam và Chủ tịch Hồ Chí Minh sáng lập, lãnh đạo và rèn luyện vào ngày 26/03/1931.'], //09
    ['Lý Tự Trọng tên thật là Lê Hữu Trọng (1914-1931). Là một trong số 8 đoàn viên cộng sản đầu tiên. Năm 1931, trong khi bảo vệ cụ Phan Bội Châu diễn thuyết ở sân vận động Lareni (Sài Gòn), Lý Tự Trọng đã bắn chết tên mật thám Lơgrăng và bị bắt. Thực dân Pháp dùng mọi cực hình tra tấn nhưng anh không hề khuất phục. Đến cả bọn cai ngục cũng phải kính nể anh mà gọi anh là "Ông nhỏ". Anh bị kết án tử hình ở tuổi 17. Đứng trước máy chém, chàng thanh niên yêu nước vẫn ngẩn cao đầu và hát vang bài Quốc tế ca. Lời tuyên bố dõng dạc của anh trước bọn quan tòa Pháp vẫn được mọi người nhắc mãi cho đến ngày nay: "Con đường của thanh niên chỉ là con đường cách mạng, không có con đường nào khác…"'], //10
    ['Chiến dịch Hồ Chí Minh, tên ban đầu là Chiến dịch Giải phóng Sài Gòn – Gia Định là chiến dịch cuối cùng của Quân Giải phóng miền Nam Việt Nam trong Cuộc Tổng tấn công và nổi dậy mùa Xuân năm 1975 và Chiến tranh Việt Nam. Chiến dịch kết thúc thắng lợi vào ngày 30-04-1975, giải phóng hoàn toàn miền Nam, thống nhất đất nước.'], //11
    ['Bùi Quang Thận là Đại tá Quân đội nhân dân Việt Nam. Ông là người lính Quân đội nhân dân Việt Nam đầu tiên cắm lá cờ chiến thắng của Mặt trận Dân tộc Giải phóng miền Nam Việt Nam trên nóc dinh Độc Lập vào lúc 11 giờ 30 phút ngày 30 tháng 4 năm 1975.'], //12
    ['Ngày 7 tháng 5 năm 1954, quân ta toàn thắng ở Điện Biên Phủ. Lá cờ quyết chiến quyết thắng của Chủ tịch Hồ Chí Minh tặng các đơn vị tham gia Chiến dịch Điện Biên Phủ tung bay trên nóc hầm chỉ huy của địch.'], //13
    ['LB Nga có đường biên giới xấp xỉ chiều dài Xích đạo. Đất nước trải ra trên 11 múi giờ, giáp với 14 nước (trong đó có 8 nước thuộc Liên Xô trước đây).'], //14
    ['Cung điện Mùa đông (tiếng Nga: Зимний дворец, ở cố đô Sankt-Peterburg — di tích kiến trúc barokko Nga, là một trong những công trình kiến trúc nổi tiếng của St. Peterburg trên khuôn viên rộng 90.000m².'], //15
    ['Ngày 21/6/1925 tại Quảng Châu (Trung Quốc), lãnh tụ Nguyễn Ái Quốc đã sáng lập ra tờ báo Thanh niên - cơ quan của tổ chức Thanh niên Cách mạng Việt Nam. Đây là tờ báo Cách mạng Việt Nam đầu tiên do Bác Hồ sáng lập, chỉ đạo và là người biên tập chính.'], //16
    [''], //17
    ['Ngày 7/12/1941, quân Nhật bất ngờ tấn công Trân Châu Cảng – căn cứ hải quân chủ yếu của Mĩ ở Thái Bình Dương. Hạm đội Mĩ bị thiệt hại nặng nề. Sự kiện này đã buộc Mĩ phải từ bỏ chính sách trung lập, tuyên chiến với Nhật Bản sau đó là với Đức và Italia.'], //18
    ['Lê Đức Thọ được trao tặng giải Nobel năm 1973 cùng với Henry Kissinger vì thương thảo thành công Hiệp định Paris chấm dứt chiến tranh, lập lại hoà bình ở Việt Nam, nhưng ông từ chối nhận giải với lý do hòa bình vẫn chưa thực sự lập lại trên đất nước Việt Nam.'], //19
    ['']  //20
];