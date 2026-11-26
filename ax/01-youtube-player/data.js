// 사람 목록과 기본 프로필 — PC용 index.html과 폰용 mobile.html이 함께 씀
// 2026-11-26 유튜브 검색으로 모은 목록 (영상 추가/삭제는 여기서)
const PEOPLE = {
  karina:   { name:'카리나 (aespa)', ids:'qA7RgR3JSK0 VP50_7GZaSs 9HPr68sGV7c kbKbmSQ_hwM IIj9ckeJzgU -XMUVRGeHf4 90gUAIS-jBQ OojlbI2DdgQ f7X8oKFkAI4 pBlpcEELPdM eAfsiHT9YtM 693lIQ4ZwoM sXeYkw4VE24 JxVKiHxWIAg bjGMNXOJItc 1U2vTeZklbw 4oAA6esif9E K3wqsn1Jl5A 9yG7S_dMIp8 lY2MWCSxvDU MUZUWMWviCM VXhW_5nimPc -IciW3tLF7Y kI4QFk8Dq-s W_jWnzWdRrg plO3jULOoKE 0-oZzYNwxVk K-LW1gUUclA R2P0sW9CGX8 a6msxLZXW6M Enqo8xDOwd4 NsixysIITyI Yh_1h4gTv4w 6_sFGZGE12g JTqCtl548oc R3AnAhBg7i4 5bF1-ohNeX0 V-hLdNm-KVE 5OCFIpwllCo 9PT8zngO03k MrsbB7qQFQA R30DHQSos8I WFIzerh0AZI' },
  anna:     { name:'안나 (MEOVV)', ids:'dblLC2fqLXY 9C4eP_SN7do mIj35Txm_og nim2poV6ygw FluYMUMG1SI wYIwOmoIJQI BwJcGzF3p2Y N06OlFLHERQ QcfjgrdtwYw OnEkb3nAmf0 0OB4Pbl-NWw EEyUdDT8pgk 3HzK3skyHpQ JaqbDbctfJI lG0YePikbOc VT4fYFflYSo' },
  moonjihae:{ name:'문지혜', ids:'OcSyFin_wZs ZuDbguOtyTA KXiE4pwnDm4 yz0_anLuWns gqj6mxxRy08 yJheTIhXae8 WDGTsY7guzs 33BJ97lvpxc UNv-fUnGcKM a71CXZLtAVU eIqDZ8FJ6QA SlEEl_3P6-w rR0VOH9TLN8 8ELpkGcWMtM siDZUI9SuY4' },
  karen:    { name:'Karen Napoly', ids:'AAnGhUy-Wlg P_5X7saCCg4 qiQMcNfD0PM bah7n5dXAro dgOi6O8umY0 ddPbhi4fJGQ pLgq-WtpRMU pDZZSVBavfw m3K_QHwUSAY OeU_EcTp2KE qQx7hs6TCDU TMfcgQDqu00 hyZW9jScn-Y l7jz7YD4GAM MWZEo-xlRmY 3XURytq0l7o E0E55FYfjgw d2M5SykKTgI nOzdLW2sORU zd6E1Prsf8Y GDrO1HnnPUM CbvBRMYKsU4 MJM4O075tU8' },
  candela:  { name:'Candela Gallo', ids:'ytbbL78KB-I XSa2usrIkik yZz44Gn1tKY dtvyqz_Ahns QlOkMQC8R0Y IiMH9QdcqXU 29wcCth5caM 4M5Dch5OIr8 Ok0eamIre-s dXOF2chAkBc 22VROG-XpeQ -h_4XeKzW9Q InrTa8MlsxQ uy3FazxgpS4 YBD8CDJcvaE 5Xd-po5eweo v50oFobWo-M eMoEs5mAxck VyKFC93o_7A' },
  // ── 추천 (위 5명을 바탕으로 고름, 처음 가중치 0.6) ──
  winter:   { name:'윈터 (aespa)', rec:true, why:'카리나와 같은 aespa 멤버', ids:'iF9di-AySFo g15OJDuGDCw 6dNvE18rW9w lQ2FIaPGVKY VeAsPeyvmRg MvLSfIB8w90 UZa1wrEnR_E Bn1iFoYbuus yG-eS-I-JTA FPvCy4YxZ0w ZIr_to5GAMg 29Yfo5rM56o 32LngfwkyHc W99uYn4qVTY KsQ0CLV_UKI q999rpyR0B4 X2KXsHwpegE 3DeTW8FKKYg aDN1ADugKNw l2HirO02YOI o1M0UWmsqOs 4lD4ygnEoPI rnSaeWKCrkg t01tD2bmxq4 K3DpULg1_Vw _wgbqaZCBug XMK5SYlLzoo 95REDLMuLeQ zx0e_DVvh34 ulMMTqajpzQ qlgWlSZrm1s EJo881yiVww FA5hsNS4DXQ BaoS8SMl5kg JmSEjwQS-2o' },
  wonyoung: { name:'장원영 (IVE)', rec:true, why:'카리나·안나처럼 직캠 인기가 많은 걸그룹 멤버', ids:'0ZHdtCgUaXs xwO84ghtvXU TVUOS8lkEcY 5PIKKfsM7gY q-XN_C8p1VU jsag5gZ9WZU k7a7KIZoeRU zBXWx--yzi4 snMGWs62fSY 8xiTH1H-dcc DqvMi7J_juM jwya11hzztc JqlvfWWOumY NRaYgvXiQBg 7Y3kcJ_YQDw SUNmVbDKeE4 8soKcZ9Iph0' },
  kazuha:   { name:'카즈하 (LE SSERAFIM)', rec:true, why:'안나처럼 한국에서 활동하는 일본 출신 멤버', ids:'UJkD3VribqY _LiJTr1Xthw H8Gu1XYh_BE Xs_SANG9fCE YlU1Uh45XwM EMYqZjWouLg 6Dpytb_iK7I QWYESMJzlmY R0PgQgyrWyI FjnNVnTGVf0 pwxOTFLhCGs TBbXfJqed38 USJgKSLxDRc NNVrPEZl0o4 9Th_KZgVaTQ iCIPMtDIXoY 6KxnVpttbJE zE7dsVf_ksc NbhwH2DzDG4 U6vicy2HVAQ 7AGRBN1Iw2w -mFBapMzot0 46-Ueij5Q5k 009G_UhAq1Y gomG42fCuKM scp8kxL332o' },
  lisa:     { name:'Lisa Napoly', rec:true, why:'Karen Napoly의 동생, 같은 파리 일상 브이로그', ids:'fizFtwEc5Jg eaQd8Ck3R-I LekDH57JQX0 eoFE0lGjR80 f61VT2dBSAk t1wYPbPAca0 11GFPqcvaT8 RqrJf_QFgi4 ppGCVvB1gXY Xm07uRRYUps JWyWv1CwMS8 bLTBNnDRaXc 5Dm-DarNLi8 cwEkLNtlZMg qCmzK9My-i8 OUNelnDIq-I _qWeR62XlPk PCp_yhpIr_U bah7n5dXAro JbLZqvko5lo Hd_0nUGOLu8 OCxsZhU0rpI LVAQlmL3-II' },
  sanne:    { name:'Sanne Vloet', rec:true, why:'Candela·Karen·문지혜처럼 모델 일상과 뷰티·웰니스 영상', ids:'F2hePFltvYw umvafMO7kUI MidJfhEDjb0 _VBz6HULekU g1jBfDctXnU WkAnmvM1zH4 Xu2Q47DIA5c spC7x_qt4k8 fxiiy8BxnbI 8Kn9YqnusXY J7KzDRdJbMw faqUHMnn12o 2T-Pm2541sc PWCjJ4UiiGo UNNUWPiax0s aoPld0e7ltI fcbMGyebpVg CbFDLbm8MyM 0YvuiVuOpjY xa-2KpRA2uU q2tsxvq7IPo vt-9sMWqUsc zCDy_0OD1Ww J_ga5uxwS9I 9hRpA6eiPF0 Zb2-LKY9Yr4 EwEVgf3IawM 65T6EPXir54 9lEU9pg_cls' },
};

// 기본 프로필 — 확인된 공개 정보만. 확인 못 한 항목은 null(→ "공개 정보 없음")
const PROFILES = {
  karina:    { real:'유지민', role:'aespa 리더', nation:'한국', birth:'2000-04-11', desc:'SM엔터테인먼트 걸그룹 aespa의 리더', src:'위키백과 등' },
  anna:      { real:'다나카 안나 (田中杏奈)', role:'MEOVV 멤버', nation:'일본 (도야마현)', birth:'2005-11-17', desc:'THEBLACKLABEL 걸그룹 MEOVV의 보컬·비주얼', src:'kprofiles, generasia' },
  moonjihae: { real:null, role:'모델 · 뷰티·웰니스 유튜버', nation:null, birth:null, desc:'한국어로 매주 뷰티와 웰니스 라이프스타일 영상을 올림 (@moonjihae_)', src:'유튜브 채널 소개' },
  karen:     { real:null, role:'패션·라이프스타일 유튜버', nation:'프랑스 (채널 국가)', birth:null, desc:'파리에서의 일상을 담는 브이로그. 동생은 Lisa Napoly', src:'유튜브 채널 소개' },
  candela:   { real:null, role:'모델 · 크리에이터', nation:'아르헨티나', birth:'2003-08-25', desc:'패션·뷰티·여행 브이로그를 올리는 모델', src:'셀럽 정보 사이트 (참고용)' },
  winter:    { real:'김민정', role:'aespa 멤버', nation:'한국 (부산)', birth:'2001-01-01', desc:'aespa의 메인보컬', src:'위키백과, MyDramaList' },
  wonyoung:  { real:'장원영', role:'IVE 멤버', nation:'한국', birth:'2004-08-31', desc:'스타쉽엔터테인먼트 걸그룹 IVE 멤버', src:'generasia' },
  kazuha:    { real:'나카무라 카즈하 (中村一葉)', role:'LE SSERAFIM 멤버', nation:'일본', birth:'2003-08-09', desc:'발레리나 출신의 LE SSERAFIM 멤버', src:'kprofiles, MyDramaList' },
  lisa:      { real:null, role:'패션·라이프스타일 유튜버', nation:'프랑스 (채널 국가)', birth:null, desc:'파리 일상·패션 브이로그. 언니는 Karen Napoly', src:'유튜브 채널 소개' },
  sanne:     { real:null, role:'모델 · 웰니스 유튜버', nation:'네덜란드', birth:'1995-03-10', desc:'빅토리아 시크릿 쇼에 섰던 모델. 지금은 웰니스·일상 영상 (출생지는 자료마다 다름)', src:'위키백과' },
};
function ageOf(birth) {
  if (!birth) return null;
  const [y, m, d] = birth.split('-').map(Number), t = new Date();
  return t.getFullYear() - y - ((t.getMonth() + 1 < m || (t.getMonth() + 1 === m && t.getDate() < d)) ? 1 : 0);
}
for (const k in PEOPLE) PEOPLE[k].ids = PEOPLE[k].ids.split(/\s+/);
