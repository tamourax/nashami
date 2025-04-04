'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f96a40bbd4d773204492ec75f8718300",
"assets/AssetManifest.bin.json": "a5d7c201907c055d828b424a1a8ca6c4",
"assets/AssetManifest.json": "8170af8f215a2246aade8ecd53454ba0",
"assets/assets/font/Roboto-Black.ttf": "301fe70f8f0f41c236317504ec05f820",
"assets/assets/font/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/assets/font/Roboto-Medium.ttf": "b2d307df606f23cb14e6483039e2b7fa",
"assets/assets/font/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/assets/image/about_icon.png": "31d86223a70f4af5343f043f5abae4e6",
"assets/assets/image/about_us.png": "3a558cf26cbac164b15cccc51821c929",
"assets/assets/image/address_home_icon.png": "f03be5334ef205c0af7fbd98b5229810",
"assets/assets/image/address_icon.png": "703166cce340d918c2587f98dbd66f6d",
"assets/assets/image/address_location_icon.png": "c59a0ab71be49657aca9665fe0d75bd8",
"assets/assets/image/address_ocffice_icon.png": "661250bd9bd16281520be35ce6e7e028",
"assets/assets/image/announcement.png": "ab5ad968a0b232c1446b5e63ff326ec2",
"assets/assets/image/apple_logo.png": "eabdc585667d5f6cdf5480fe7fdd69c9",
"assets/assets/image/arabic.png": "0378edd124ce1f212f9845e4c42ea177",
"assets/assets/image/bangla.png": "b1bea6b66d125fd0468d5bb462996c71",
"assets/assets/image/bank_info.png": "c6a97745d61fc61f6664a6ffd5cf644b",
"assets/assets/image/bonus_icon.svg": "94c6bf567dc1371b6731b1ca1512cae6",
"assets/assets/image/calender.png": "4ec0a5d9a1aa2bf107544ace644ffbe0",
"assets/assets/image/call.png": "917863d0e098d9b696372372a986c2b8",
"assets/assets/image/cancel.gif": "b5ff009064074c663d349784c0365e6f",
"assets/assets/image/cancel.svg": "1043020718a49a018d2384c9888bb77b",
"assets/assets/image/cancelation.png": "4c4fc28be71c227111db64b7e680e47e",
"assets/assets/image/cancelation_icon.png": "16ba10df95911fdac55de208a34e1d7e",
"assets/assets/image/cancellation_icon.png": "9480e7040347b8bb2404deb10bdc7e0d",
"assets/assets/image/card_decor.svg": "bdf6522c10f8822adc00952de5f1381a",
"assets/assets/image/cash.png": "6b87c15b8e8220d823e86d89eb207951",
"assets/assets/image/cash_back.svg": "041d890824c94cc44b25aa9bc25d17dd",
"assets/assets/image/cash_on_delivery.png": "27223f64aaff7de37038f029307ad291",
"assets/assets/image/chat.png": "496d5e586db38fd1516ddff572d3897e",
"assets/assets/image/chat_icon.png": "f2a3b47657635597bcd2be4ed164e392",
"assets/assets/image/chat_image.png": "709e3d8fd40bb33f97568cb359d272f8",
"assets/assets/image/check.gif": "74342fdf957b3480a5af2f1911313c3e",
"assets/assets/image/check.svg": "24a736e0960f42c7b804a19ce456d2bc",
"assets/assets/image/checked.png": "f66f21ca8692618294ace64b4a60bfb2",
"assets/assets/image/city.png": "dddbabee237cc286940388fbcf2d281e",
"assets/assets/image/city_white.png": "ccce950685f8e7659500203b91c72561",
"assets/assets/image/cod_icon.png": "13ed20bc5944cf43246b894f845bf3b9",
"assets/assets/image/confirm_dine_in.gif": "2d0ff18a224b5fffc17f464d93895e88",
"assets/assets/image/congratulation_dark.gif": "19506f73e15765db99341423e81e2505",
"assets/assets/image/congratulation_light.gif": "ef6a84f42867d08b5e81ba3462cdde3e",
"assets/assets/image/cooking.gif": "abd74bbae829c2405f0ee2f87428c2b2",
"assets/assets/image/cooking_gif.gif": "c221f4e02eb7bbb7094886eedcb3f2c5",
"assets/assets/image/coupon.png": "cfc95c5a80ed1e88f71ab60691b79aef",
"assets/assets/image/coupon_bg.png": "fa03a64f7798cbada3df9ddf52592309",
"assets/assets/image/coupon_bg_dark.png": "a8f61aa4ee0a1200b1b085e75dab3851",
"assets/assets/image/coupon_bg_light.png": "b919ee90173a829572e4d184ac47f999",
"assets/assets/image/coupon_icon.png": "faf9923ec19bcc393237eb92ac16620a",
"assets/assets/image/coupon_icon1.png": "3c5f2b90c98de96c04a45cabf2df438a",
"assets/assets/image/credit_icon.png": "dc5b7cc21e5f4ddb20286f93a0023eac",
"assets/assets/image/credit_icon_wallet.png": "daaaa528f999a978fe846d041b0498f4",
"assets/assets/image/cuisine_bg.png": "5d170a07974df6e40581190fda8b3084",
"assets/assets/image/cuisine_bg.svg": "6b1fddb6caa1700735ceef1657063bf3",
"assets/assets/image/cutlery.png": "e8c9386a3ad12c6df1a0b263f0697643",
"assets/assets/image/debit.png": "56798bf90574c035492e9700453b4794",
"assets/assets/image/debit_icon_wallet.png": "d2cd36e03811e214fecb4e9c6ac56d7f",
"assets/assets/image/delete_icon.png": "fc9da43bf0777d705f1f20581894e7cf",
"assets/assets/image/delivery-man.gif": "cd104123a8688e5012ec79d142ddc44a",
"assets/assets/image/delivery_icon.png": "8891a38f6f9de1212a21bfa7580653da",
"assets/assets/image/delivery_location.png": "56356687a46c2ae9de0af3373d174e08",
"assets/assets/image/delivery_location.svg": "b88bb023abd806e0173072825db72252",
"assets/assets/image/delivery_man_join.png": "a2c7e532a235afb891b6841b2cc84b7a",
"assets/assets/image/delivery_man_marker.png": "f60b8a8c45b015582cc109a865bfbd7b",
"assets/assets/image/dialog_warning.png": "243d1054483194fc84fcd27798175213",
"assets/assets/image/digital_payment.png": "49b1e3bc90ca48aa928007d5e9247aa0",
"assets/assets/image/dine_in_map.png": "2828874b08ec48b46f463927f19189fa",
"assets/assets/image/dine_in_user.png": "3c839797836e76fdfd61c5b4add62723",
"assets/assets/image/distance_km.png": "f66c79f5991ebf8afc7a20db152cd391",
"assets/assets/image/dm_icon.png": "9df1223348d2d45dc602eddcdfce494f",
"assets/assets/image/dm_registration_success.svg": "7fb71f49ead75d0925c0f6627799f33f",
"assets/assets/image/documents.png": "f89dc14d46a2dde998281e6c26daa81f",
"assets/assets/image/earn_money.png": "c484d1d45625db5f0e7cc3427456bc1b",
"assets/assets/image/edit_delivery.png": "605e9ae227a427d2fc1345312d0c5c51",
"assets/assets/image/efood.png": "c6d099f73b9809dad4041d1eb7886ee4",
"assets/assets/image/email_or_phone.png": "e685094c614e7300572f5c0989e785db",
"assets/assets/image/empty_address.png": "d8f172012f8d85db79b1427aedf99082",
"assets/assets/image/empty_address.svg": "fb54e73c763272e7860aa2e7ae4dc0f3",
"assets/assets/image/empty_cart.png": "075442a1ee0bd39c89908f48c63c45c7",
"assets/assets/image/empty_cart.svg": "5dcc58fb87fefe8243572128170d69a9",
"assets/assets/image/empty_chat.svg": "b5858517ac1b0046f5ec93c50e093234",
"assets/assets/image/empty_coupon.svg": "e5f2bc11e841dbfffd5eae92b8032eb5",
"assets/assets/image/empty_food.svg": "5d9ebb183eea0f69d3e9bf375bd0a3d2",
"assets/assets/image/empty_notification.svg": "ac86ffa3dbe75d81e9d622ade33c28d5",
"assets/assets/image/empty_order.svg": "b2fb30af6cfee7765d9bb6f49507c23c",
"assets/assets/image/empty_restaurant.svg": "33734324b9b3188ce19261e3ce8e694f",
"assets/assets/image/empty_serch_food.svg": "0b48ca9b4ab65977dbff56596c02ed97",
"assets/assets/image/empty_transaction.svg": "15643bae15bbd5c0a0b0fc2ac37ae43f",
"assets/assets/image/empty_wishlist.svg": "192893939ed0be069d215eb3a2945c03",
"assets/assets/image/english.png": "664617c1e570b1ee502a5839e7feb947",
"assets/assets/image/enjoy_off.png": "14f0ebac00f60561c821480131170505",
"assets/assets/image/facebook.png": "c6c9b763669aab458b375b91c590a6f5",
"assets/assets/image/facebook_icon.png": "32689fba86b48f492308a388b33a8ae3",
"assets/assets/image/favourite_icon.svg": "dac79efa4cb393b02e29eaca31b8d68a",
"assets/assets/image/file.png": "c470f1b0e59f389f8426450717a440dc",
"assets/assets/image/file.svg": "250cfad713a42bc13d9bfbcec09e6401",
"assets/assets/image/food_placeholder.svg": "df7cee2759057a00e45a5c55abe10208",
"assets/assets/image/forget_icon.png": "9f8bf028447adca9b67870ac898c158d",
"assets/assets/image/forgot.png": "568507d63e55d2fad963294988fe9396",
"assets/assets/image/free_delivery.png": "ccc34dc0918422c6b5ddaf41fcc9a396",
"assets/assets/image/fullscreen.png": "cff2e54dee752c82cfb966e8eaad4e66",
"assets/assets/image/giftbox.gif": "0f9042b692714dabc3dddabb0042578d",
"assets/assets/image/gift_box1.gif": "3cfefee89af7137ad4ac57b8f06d85f2",
"assets/assets/image/google.png": "7e9dbf3dd42f3313ee5b714514203916",
"assets/assets/image/guest.png": "b4538924ce7a0c90fd50fa3fde78ba99",
"assets/assets/image/guest_icon.png": "adc11787c1a862900ce20467b3d8c7fa",
"assets/assets/image/guest_icon_light.png": "19ecfb8d6c6402775e767a36fb962494",
"assets/assets/image/halal_icon.png": "0abd6ecb5b3fa5a7f39929e99fab99e2",
"assets/assets/image/handover.gif": "eb676e0efd94adb92649665f4dfa24bb",
"assets/assets/image/help_address.png": "ef7db378a277a1fdb8d2513f3f8ab990",
"assets/assets/image/help_email.png": "e250186e675ebe80af3b3d38b5e33f66",
"assets/assets/image/help_icon.png": "567ee62e2424627f7db40540726957f9",
"assets/assets/image/help_phone.png": "a60e2887c19da6b79b59657127c69ca0",
"assets/assets/image/highlight_bg.svg": "140e3f13af640a90e27f52ef610c3527",
"assets/assets/image/highlight_icon.png": "3bc1b1330c4b182ff9c3e1427fbdfdd4",
"assets/assets/image/home_delivery.png": "04c71c51396d5e43f45e81695121cd34",
"assets/assets/image/home_icon.png": "a24811d2b9f304cb73b0b8a8a40fa32a",
"assets/assets/image/house.png": "1c504c1a5c5563127c783a1c235f4037",
"assets/assets/image/house_icon.png": "d575679549dd348bab1ed28888aaae0b",
"assets/assets/image/image.svg": "033a12bce0652bc47ee1fd4906be3340",
"assets/assets/image/instagram.png": "7efbb1d4f0c76260f86bf6165626e8ae",
"assets/assets/image/items_count.png": "dce7c69709859beba439d1b7214c0823",
"assets/assets/image/landing_app_store.png": "83990cfc1641788d49e306b914ab93f6",
"assets/assets/image/landing_google_play.png": "556d7954c00786c4422a99a023d1e0b2",
"assets/assets/image/language.png": "898e5b4c7c47345d97f91c2c7f377c8a",
"assets/assets/image/language_bg.png": "41b91cdebb40b5ba027a78ebf713a9bd",
"assets/assets/image/language_bg.svg": "87663745745b9d42c492d4d2a44c2d25",
"assets/assets/image/language_icon.png": "cf03b59f056a6e0640a23a3575bd4a3b",
"assets/assets/image/last_order_review_icon.svg": "6d3180cb021bdae40cc086719a4f4dc0",
"assets/assets/image/linkedin.png": "9c3029c6df29410563e643023feabedf",
"assets/assets/image/location.png": "da7e9406b80a9e4c6decd651991d5731",
"assets/assets/image/location_confirm.png": "5226afda5461a2641d3ab6e27ae2b09d",
"assets/assets/image/location_marker.png": "6f83a8f8d055887184e03450ef7c6310",
"assets/assets/image/lock.png": "1dc98b7e6cc1dc406dc8b19b94cedc49",
"assets/assets/image/logo.png": "d0dbca9b4ace7bfad7e2e6f3c36585bc",
"assets/assets/image/logo_name.png": "1d1cee49a142408c6bd1e638e8e0314a",
"assets/assets/image/log_out.png": "2a4e0507a9000bf2579b00f94a3e47ac",
"assets/assets/image/loyal.png": "c37e2d977820ae57da67b4f8f4251d92",
"assets/assets/image/loyalty_convert_icon.png": "699a3a6ebef3baeef311780e9e496de7",
"assets/assets/image/loyalty_icon.png": "dc5b7cc21e5f4ddb20286f93a0023eac",
"assets/assets/image/l_restaurant.png": "b50b671a2938a965a0cd6137ebf82aae",
"assets/assets/image/mail.png": "249d5d5120f8dcdbf390b3de6f27e498",
"assets/assets/image/maintenance.png": "1f5b369688de06f840cfbdb62792a87d",
"assets/assets/image/map.png": "e837ed21897072fffdb151bf2e186664",
"assets/assets/image/message.png": "ca9cfd0c532b6d96624b3b43e8962f24",
"assets/assets/image/message_empty.svg": "12861b31555f9c42f74ca37cd44ad886",
"assets/assets/image/messenger_icon.png": "c60577450b9031c68c14addc116211f0",
"assets/assets/image/money.png": "dbf2b6f225aaef4347c8e36efb07d8c4",
"assets/assets/image/more_icon.png": "30a772aa6d9ea89e89ac05f601919238",
"assets/assets/image/my_location_marker.png": "d20a9679dc225774bfb7bf4e2294410a",
"assets/assets/image/nearby_location.png": "45b8d9b45fc6aa5a90a0aa3dac7085cb",
"assets/assets/image/nearby_location.svg": "50c1c7d875cf8f14d066b8f5266c01e1",
"assets/assets/image/nearby_restaurant.png": "6a8c43bd947c76abb07290751329dbdc",
"assets/assets/image/nearby_restaurant.svg": "e3dcc28a5b69c33f69e605ca33756f98",
"assets/assets/image/nearby_restaurants.png": "50a74d0d89b1ddb454f9c944a051c6d4",
"assets/assets/image/nearby_restaurants.svg": "5f0494e3c6df22c96c46b7eff38431a6",
"assets/assets/image/near_restaurant.png": "cb85897f05d3a0c118bcbabab04e31ce",
"assets/assets/image/near_restaurant_web.png": "506048310071bac9a406fcbdc0dc3340",
"assets/assets/image/non_veg.png": "782f91ccfd64aa446006166a5aebe501",
"assets/assets/image/non_veg_logo.png": "3ce7ac399e60d5549b0bd581bc4a3745",
"assets/assets/image/note.png": "583e5460a1bfe0e6d17e6eaeb101fdb5",
"assets/assets/image/notification_placeholder.png": "94045b1dbd4163fde887651bf39033a0",
"assets/assets/image/no_address.png": "6d941a5ac0e31f92d79cd75d5cf0e4f3",
"assets/assets/image/no_coupon.png": "12a937cb01d7380ad141380fc5ba7f73",
"assets/assets/image/no_food.png": "d3e65706ab396615b277ba95664e2ff6",
"assets/assets/image/no_internet.png": "58be6abe06a0524bedde472b328affe0",
"assets/assets/image/no_restaurants.png": "db369167f6c5663582154f6590a73a7a",
"assets/assets/image/office_icon.png": "1adcb65dcd22efd200dad448ad4d4b5b",
"assets/assets/image/offline_payment_icon.png": "829aab15febbeecfbc7ca5e66ca0e702",
"assets/assets/image/onboard_1.svg": "08d230a89f9976f650fd9049dd193072",
"assets/assets/image/onboard_2.svg": "9a9c68d027a1bd5abb649f88319f315f",
"assets/assets/image/onboard_3.svg": "fd6899aecf3bdfeedd6b671e8af59561",
"assets/assets/image/onboard_frame_1.svg": "c0141b1130ba57aa4261f0ef637a4754",
"assets/assets/image/onboard_frame_2.svg": "cb3caa2741b0ea70f2465d21c5d0757f",
"assets/assets/image/onboard_frame_3.svg": "2ec125538a5ead491b76b911f7bb334f",
"assets/assets/image/on_the_way.gif": "7933ca6b96f6aac06e3bbe5b9c5dc205",
"assets/assets/image/orders.png": "ea10ebd466fcb790c07bb92f523015b0",
"assets/assets/image/order_call.png": "a98e1a26e567cbeae7c3594624b8c7ad",
"assets/assets/image/order_confirm_icon.svg": "f471bed9e014d136897341553591dd79",
"assets/assets/image/order_menu_icon.png": "29667d3fc8d91a69ece3a55e679854cb",
"assets/assets/image/order_on_the_way_icon.svg": "4cd5715d32e46c333073ac174ac162ef",
"assets/assets/image/order_place_holder.png": "dd2fac19c30f14d17c47aab047bbf7d0",
"assets/assets/image/other_icon.png": "ea59044a2bf612d001ee44185ff4510b",
"assets/assets/image/otp.png": "2c618b1d564d90077ac5c9f42c3dca7e",
"assets/assets/image/otp_verification.png": "2cdf8778561b6259d06d2b8baf40f57a",
"assets/assets/image/partial_wallet.png": "5cc17e11f29bcbb289c1a044a4eff132",
"assets/assets/image/partial_wallet_transperant.png": "001ad681131e6786a819f4d26e5fd471",
"assets/assets/image/payment_select.png": "4208d1e8fbc22dda46346d6518658819",
"assets/assets/image/pdf.png": "8895c967d44a2c20e96322fd52b82b0b",
"assets/assets/image/pending.gif": "6456f0c5c5d7ddd81b49347d2817175a",
"assets/assets/image/pending_dine_in.gif": "004a8e333524eb0658a0f39563a12870",
"assets/assets/image/pending_for_all.gif": "e22c31aad4cfda4d6d3291f19fda8314",
"assets/assets/image/percent_offer.png": "da75636dfd030300fb3013cbd230789b",
"assets/assets/image/percent_tag.png": "5ef6899e2f4e4f437ae456ecda4af6be",
"assets/assets/image/pick_marker.png": "63f3dd1f11ed6d3e22aabf5bb488491a",
"assets/assets/image/picRestaurantMarker.svg": "e2d7a6b270739b3a1b89fcfb1481de3a",
"assets/assets/image/pinterest.png": "88abf9fa24e86398fea20ac15e3b2b72",
"assets/assets/image/placeholder.jpg": "cdbfc521da47596494f723ab1e60c0c7",
"assets/assets/image/placeholder.png": "11ccd453db17cf0c20ab94abd95bc809",
"assets/assets/image/placeholder.svg": "28470fe7a6b61b9e5fe85bcf7e3080c5",
"assets/assets/image/point_icon.png": "9199d095b00a06bde2b112d27eb60e7d",
"assets/assets/image/policy.png": "b34dd2e7ac20b07c1c877c44179b6bdf",
"assets/assets/image/preparing_food.gif": "85d834af9453e4441c0dd17050f03c32",
"assets/assets/image/privacy_icon.png": "15691df453bbc832b44c3d3050f34dc1",
"assets/assets/image/processing.gif": "112362e321c34fbb62cee869e5f4abf5",
"assets/assets/image/profile_bg.png": "076e45f435180f8a9ac7461c72f054b0",
"assets/assets/image/profile_delete.png": "b2e2cfdc48246ad384c8f6a248d3c953",
"assets/assets/image/profile_icon.png": "ab555ae621b4afbce88650e526b41d11",
"assets/assets/image/profile_placeholder.svg": "491ae235390c86f63e871dd54a98f316",
"assets/assets/image/push_notification.svg": "45521b859fafe4e64b6ddc4ad76c3c9f",
"assets/assets/image/refer_a_friend.png": "0c461c8260fd61452151ab9a251d875d",
"assets/assets/image/refer_bg.png": "7f2d5b24c17ab03d27c59a508df44331",
"assets/assets/image/refer_bottom_bg.svg": "25f01fab439e121351177cb237155204",
"assets/assets/image/refer_code.png": "368c5f0684529d4304dc2a7db75ce557",
"assets/assets/image/refer_earn_icon.svg": "1629240e498214e88729e3d0eea70b1f",
"assets/assets/image/refer_icon.png": "3ef9b2cce87e2792df1eb46818e8af02",
"assets/assets/image/refer_person_icon.svg": "0832bc89da04f7e7478a21b171b61d67",
"assets/assets/image/refund.png": "aeaf7c9da15f582be65fdca87ec367c0",
"assets/assets/image/refund_icon.png": "41f36ce91cbf63e18225fcc77a7e355c",
"assets/assets/image/regular_order.png": "dbb914f8e7faa00d4aad0db77970d51a",
"assets/assets/image/reset_lock.png": "ef70650111f92d89835a12f76ffeed41",
"assets/assets/image/restaurants_placeholder.svg": "af6198b014cad8441c03eb8a52144bb5",
"assets/assets/image/restaurant_coupon.png": "7538257ded29fdc87200f96a48653760",
"assets/assets/image/restaurant_cover.png": "4f419fb48e42115bc333a388a35060a0",
"assets/assets/image/restaurant_icon_merker.png": "e78261c141666ba79cbf19fd3689a519",
"assets/assets/image/restaurant_join.png": "1540e9299ef60ecf938bce185cd38514",
"assets/assets/image/restaurant_marker.png": "eb05595e05153d75e64f857454ec622e",
"assets/assets/image/restaurant_registration_success.svg": "b59c965d6bcef8fcea84b7e166a277f8",
"assets/assets/image/route.png": "aaec4a412a607a0291bee180e3cc1847",
"assets/assets/image/Search.png": "9a6fc554af75add3e145e191b716f426",
"assets/assets/image/search_icon.png": "f48960a6d64d2519c97e3d3d8d1461ca",
"assets/assets/image/send.svg": "28035973f741ff889cb122f4b778cdfd",
"assets/assets/image/send_icon_web.png": "a18a3736b79003a7a92b2e408a3047bb",
"assets/assets/image/served_dine_in.gif": "d486327f4d9d84697ccf437afbc9e2c2",
"assets/assets/image/shipping_icon.png": "15f4750ca18f718024231c8b36b8da6b",
"assets/assets/image/shipping_policy.png": "38386c9fb86a146011da4025c53976cc",
"assets/assets/image/shopping_bag_icon.png": "a91e46ad73a673fc3f46bade0a4b284e",
"assets/assets/image/shop_icon.svg": "f68dd474ea446ba6ab7dbba07194a52e",
"assets/assets/image/spanish.png": "efe41d8c5ed5999dec5a9a304461c5cc",
"assets/assets/image/store_delivery_time_icon.png": "facb47d776e853779315bfc0c8d9824b",
"assets/assets/image/store_icon.png": "6c114036a8843fdfef70a8d4455fffd0",
"assets/assets/image/store_location_icon.png": "389c99a2255f44240b23e09afe08e8ad",
"assets/assets/image/subs1.png": "992e82ff32f92aa170d0b944f93ea098",
"assets/assets/image/subs2.png": "91bb9681ce42675c71986e72da80d99a",
"assets/assets/image/subs3.png": "602fa49219d94dfb1824e5c341a8c1b0",
"assets/assets/image/subscription_order.png": "e88127558854b7ed5db2a3aaa395c1d0",
"assets/assets/image/success_animation.gif": "6535eb254cb1dc52741c8cb4bba6ebe9",
"assets/assets/image/support.png": "ecd41f9fa1b5d5fad3c527c2c0d64b9c",
"assets/assets/image/support_image.png": "49b87aa8ef9ee0119e9541e6ca7a7072",
"assets/assets/image/takeaway.png": "8300f512c7be173257238e9827748839",
"assets/assets/image/terms.png": "09d3ca84434218336b985ae8159abcfe",
"assets/assets/image/terms_icon.png": "e913528485907c9471989f0f847f19a0",
"assets/assets/image/tracking.png": "43b5bf93927d09e615dfdee638606d6d",
"assets/assets/image/track_delivered.png": "ad40539c795c5a9c5a9987b9d8f7083a",
"assets/assets/image/track_on_the_way.png": "1702eab927a63c3b81e72635ded05b4e",
"assets/assets/image/track_order_accept.png": "0e342d48be283be34bcd2a9848006711",
"assets/assets/image/track_order_place.png": "155551213b803602ae4f92dd5d4ad896",
"assets/assets/image/track_order_preparing.png": "f10f6d150b47e6aa8c083bd191508a6a",
"assets/assets/image/twitter.png": "3b3eed2cbd17e114465290d1beb85a9d",
"assets/assets/image/unfavourite_icon.svg": "dc8d685a8d5f5bfc3cc29d654820e16c",
"assets/assets/image/unverified.png": "184471215c460d0367530bf7cf60691c",
"assets/assets/image/update.png": "2dbf401fc974dd44d87174fa1e4742d0",
"assets/assets/image/user.png": "3c8bfcff49071020e373c4479bf65b9e",
"assets/assets/image/user_marker.png": "3763dbffeeee2ead95356cbd2e20c922",
"assets/assets/image/vat_tax_icon.svg": "82c4af8c3f92d1229547a06d0e98a557",
"assets/assets/image/veg.png": "9996964f9873848ea868f11ce75268da",
"assets/assets/image/vegetarian.png": "a5e7f2b328f85e3c2b9ccaf47e593383",
"assets/assets/image/verified.png": "5b1e58fac24b81d99f06be310207d6c5",
"assets/assets/image/wallet.png": "2041d48ff7bffd8df3a5b46703cdcfb1",
"assets/assets/image/wallet_bonus.png": "0398c9801a19899fddb3ecc746c30328",
"assets/assets/image/wallet_icon.png": "0de923cfe563e07394ebfbabd1be948a",
"assets/assets/image/wallet_pay.png": "7681c02c280742a17ac8242aabdde7b8",
"assets/assets/image/wallet_profile.png": "88ca80eb073da9c9f0775e8f3466ec29",
"assets/assets/image/warning.png": "9cdb1ba71f1be0698d4dd4aa33fcec08",
"assets/assets/image/warning_icon.png": "6ca059fe3cbae319c022f62f214d6139",
"assets/assets/image/weather.png": "8820b4e6a06ca1c7794bf13b07eb21c7",
"assets/assets/image/whatsapp_icon.png": "0ab572f7121cfb608468f56961e573a5",
"assets/assets/image/work_icon.png": "2cd904725447d802ef3780847445a937",
"assets/assets/image/your_location_icon.png": "a511ee22eece06344e49a2eae3c43c1e",
"assets/assets/image/youtube.png": "2f4bdc3263fb14f05c4eec37944734cd",
"assets/assets/language/ar.json": "a7789941da22eeb8c273437d06044575",
"assets/assets/language/bn.json": "0bf9f1b6c588dde94ea6bf0bc42310d1",
"assets/assets/language/en.json": "8e0b663e519ac3369309fccee27952cf",
"assets/assets/language/es.json": "31518c784390e297c03e9d6cc1670304",
"assets/assets/map/dark_map.json": "5b4f100b89841019da37e2d6c56f9cea",
"assets/assets/map/light_map.json": "d751713988987e9331980363e24189ce",
"assets/FontManifest.json": "569adbcb65082f8c8fed9d0f91829361",
"assets/fonts/MaterialIcons-Regular.otf": "d9b9b70f79266fbc9d4346c14fc1c946",
"assets/img/1.png": "4f58b91bb7eca16bf0fd024dc9505757",
"assets/img/2.png": "f41583c8358b07fbe370d26496695df1",
"assets/img/3.png": "361d5992f8ebc066dcf8c31f24d81df1",
"assets/img/4.png": "5fab8c52fccf4de621d417399c25d030",
"assets/img/5.png": "7441d6783ca9f8f1c599e6a9b112175f",
"assets/img/6.png": "52fabe4f351d14c7cf49ab30ed38bc9d",
"assets/img/7.png": "bbcb7f384d4117647c29783f58c42d3e",
"assets/img/icon-1.svg": "134d703632d0ce9975c07d1e3c1999b8",
"assets/img/icon-2.svg": "32c58fcda6369b77930c44a108bf1712",
"assets/img/icon-3.svg": "3d659cb8ae82783ff5ff4310f3328e35",
"assets/img/icon-4.svg": "2af974fbe3f037736903f80b321385a6",
"assets/img/logo.png": "d126c6a330fa4b4dbe90764e21ff2d51",
"assets/img/preloader.png": "a7021c1bba74a5aa166ffb8f2b415411",
"assets/NOTICES": "9486be39726582621cfac89e948e9f4c",
"assets/packages/country_code_picker/flags/ad.png": "796914c894c19b68adf1a85057378dbc",
"assets/packages/country_code_picker/flags/ae.png": "045eddd7da0ef9fb3a7593d7d2262659",
"assets/packages/country_code_picker/flags/af.png": "44bc280cbce3feb6ad13094636033999",
"assets/packages/country_code_picker/flags/ag.png": "9bae91983418f15d9b8ffda5ba340c4e",
"assets/packages/country_code_picker/flags/ai.png": "cfb0f715fc17e9d7c8662987fbe30867",
"assets/packages/country_code_picker/flags/al.png": "af06d6e1028d16ec472d94e9bf04d593",
"assets/packages/country_code_picker/flags/am.png": "2de892fa2f750d73118b1aafaf857884",
"assets/packages/country_code_picker/flags/an.png": "469f91bffae95b6ad7c299ac800ee19d",
"assets/packages/country_code_picker/flags/ao.png": "d19240c02a02e59c3c1ec0959f877f2e",
"assets/packages/country_code_picker/flags/aq.png": "c57c903b39fe5e2ba1e01bc3d330296c",
"assets/packages/country_code_picker/flags/ar.png": "bd71b7609d743ab9ecfb600e10ac7070",
"assets/packages/country_code_picker/flags/as.png": "830d17d172d2626e13bc6397befa74f3",
"assets/packages/country_code_picker/flags/at.png": "7edbeb0f5facb47054a894a5deb4533c",
"assets/packages/country_code_picker/flags/au.png": "600835121397ea512cea1f3204278329",
"assets/packages/country_code_picker/flags/aw.png": "8966dbf74a9f3fd342b8d08768e134cc",
"assets/packages/country_code_picker/flags/ax.png": "ffffd1de8a677dc02a47eb8f0e98d9ac",
"assets/packages/country_code_picker/flags/az.png": "967d8ee83bfe2f84234525feab9d1d4c",
"assets/packages/country_code_picker/flags/ba.png": "9faf88de03becfcd39b6231e79e51c2e",
"assets/packages/country_code_picker/flags/bb.png": "a5bb4503d41e97c08b2d4a9dd934fa30",
"assets/packages/country_code_picker/flags/bd.png": "5fbfa1a996e6da8ad4c5f09efc904798",
"assets/packages/country_code_picker/flags/be.png": "498270989eaefce71c393075c6e154c8",
"assets/packages/country_code_picker/flags/bf.png": "9b91173a8f8bb52b1eca2e97908f55dd",
"assets/packages/country_code_picker/flags/bg.png": "d591e9fa192837524f57db9ab2020a9e",
"assets/packages/country_code_picker/flags/bh.png": "6e48934b768705ca98a7d1e56422dc83",
"assets/packages/country_code_picker/flags/bi.png": "fb60b979ef7d78391bb32896af8b7021",
"assets/packages/country_code_picker/flags/bj.png": "9b503fbf4131f93fbe7b574b8c74357e",
"assets/packages/country_code_picker/flags/bl.png": "30f55fe505cb4f3ddc09a890d4073ebe",
"assets/packages/country_code_picker/flags/bm.png": "eb2492b804c9028f3822cdb1f83a48e2",
"assets/packages/country_code_picker/flags/bn.png": "94d863533155418d07a607b52ca1b701",
"assets/packages/country_code_picker/flags/bo.png": "92c247480f38f66397df4eb1f8ff0a68",
"assets/packages/country_code_picker/flags/bq.png": "67f4705e96d15041566913d30b00b127",
"assets/packages/country_code_picker/flags/br.png": "8fa9d6f8a64981d554e48f125c59c924",
"assets/packages/country_code_picker/flags/bs.png": "814a9a20dd15d78f555e8029795821f3",
"assets/packages/country_code_picker/flags/bt.png": "3c0fed3f67d5aa1132355ed76d2a14d0",
"assets/packages/country_code_picker/flags/bv.png": "f7f33a43528edcdbbe5f669b538bee2d",
"assets/packages/country_code_picker/flags/bw.png": "04fa1f47fc150e7e10938a2f497795be",
"assets/packages/country_code_picker/flags/by.png": "03f5334e6ab8a537d0fc03d76a4e0c8a",
"assets/packages/country_code_picker/flags/bz.png": "e95df47896e2a25df726c1dccf8af9ab",
"assets/packages/country_code_picker/flags/ca.png": "bc87852952310960507a2d2e590c92bf",
"assets/packages/country_code_picker/flags/cc.png": "126eedd79580be7279fec9bb78add64d",
"assets/packages/country_code_picker/flags/cd.png": "072243e38f84b5d2a7c39092fa883dda",
"assets/packages/country_code_picker/flags/cf.png": "625ad124ba8147122ee198ae5b9f061e",
"assets/packages/country_code_picker/flags/cg.png": "7ea7b458a77558527c030a5580b06779",
"assets/packages/country_code_picker/flags/ch.png": "8d7a211fd742d4dea9d1124672b88cda",
"assets/packages/country_code_picker/flags/ci.png": "0f94edf22f735b4455ac7597efb47ca5",
"assets/packages/country_code_picker/flags/ck.png": "35c6c878d96485422e28461bb46e7d9f",
"assets/packages/country_code_picker/flags/cl.png": "658cdc5c9fd73213495f1800ce1e2b78",
"assets/packages/country_code_picker/flags/cm.png": "89f02c01702cb245938f3d62db24f75d",
"assets/packages/country_code_picker/flags/cn.png": "6b8c353044ef5e29631279e0afc1a8c3",
"assets/packages/country_code_picker/flags/co.png": "e2fa18bb920565594a0e62427540163c",
"assets/packages/country_code_picker/flags/cr.png": "475b2d72352df176b722da898490afa2",
"assets/packages/country_code_picker/flags/cu.png": "8d4a05799ef3d6bbe07b241dd4398114",
"assets/packages/country_code_picker/flags/cv.png": "60d75c9d0e0cd186bb1b70375c797a0c",
"assets/packages/country_code_picker/flags/cw.png": "db36ed08bfafe9c5d0d02332597676ca",
"assets/packages/country_code_picker/flags/cx.png": "65421207e2eb319ba84617290bf24082",
"assets/packages/country_code_picker/flags/cy.png": "9a3518f15815fa1705f1d7ca18907748",
"assets/packages/country_code_picker/flags/cz.png": "482c8ba16ff3d81eeef60650db3802e4",
"assets/packages/country_code_picker/flags/de.png": "6f94b174f4a02f3292a521d992ed5193",
"assets/packages/country_code_picker/flags/dj.png": "dc144d9502e4edb3e392d67965f7583e",
"assets/packages/country_code_picker/flags/dk.png": "f9d6bcded318f5910b8bc49962730afa",
"assets/packages/country_code_picker/flags/dm.png": "b7ab53eeee4303e193ea1603f33b9c54",
"assets/packages/country_code_picker/flags/do.png": "a05514a849c002b2a30f420070eb0bbb",
"assets/packages/country_code_picker/flags/dz.png": "93afdc9291f99de3dd88b29be3873a20",
"assets/packages/country_code_picker/flags/ec.png": "cbaf1d60bbcde904a669030e1c883f3e",
"assets/packages/country_code_picker/flags/ee.png": "54aa1816507276a17070f395a4a89e2e",
"assets/packages/country_code_picker/flags/eg.png": "9e371179452499f2ba7b3c5ff47bec69",
"assets/packages/country_code_picker/flags/eh.png": "f781a34a88fa0adf175e3aad358575ed",
"assets/packages/country_code_picker/flags/er.png": "08a95adef16cb9174f183f8d7ac1102b",
"assets/packages/country_code_picker/flags/es.png": "e180e29212048d64951449cc80631440",
"assets/packages/country_code_picker/flags/et.png": "2c5eec0cda6655b5228fe0e9db763a8e",
"assets/packages/country_code_picker/flags/eu.png": "b32e3d089331f019b61399a1df5a763a",
"assets/packages/country_code_picker/flags/fi.png": "a79f2dbc126dac46e4396fcc80942a82",
"assets/packages/country_code_picker/flags/fj.png": "6030dc579525663142e3e8e04db80154",
"assets/packages/country_code_picker/flags/fk.png": "0e9d14f59e2e858cd0e89bdaec88c2c6",
"assets/packages/country_code_picker/flags/fm.png": "d4dffd237271ddd37f3bbde780a263bb",
"assets/packages/country_code_picker/flags/fo.png": "0bfc387f2eb3d9b85225d61b515ee8fc",
"assets/packages/country_code_picker/flags/fr.png": "79cbece941f09f9a9a46d42cabd523b1",
"assets/packages/country_code_picker/flags/ga.png": "fa05207326e695b552e0a885164ee5ac",
"assets/packages/country_code_picker/flags/gb-eng.png": "0b05e615c5a3feee707a4d72009cd767",
"assets/packages/country_code_picker/flags/gb-nir.png": "fc5305efe4f16b63fb507606789cc916",
"assets/packages/country_code_picker/flags/gb-sct.png": "075bb357733327ec4115ab5cbba792ac",
"assets/packages/country_code_picker/flags/gb-wls.png": "72005cb7be41ac749368a50a9d9f29ee",
"assets/packages/country_code_picker/flags/gb.png": "fc5305efe4f16b63fb507606789cc916",
"assets/packages/country_code_picker/flags/gd.png": "42ad178232488665870457dd53e2b037",
"assets/packages/country_code_picker/flags/ge.png": "93d6c82e9dc8440b706589d086be2c1c",
"assets/packages/country_code_picker/flags/gf.png": "71678ea3b4a8eeabd1e64a60eece4256",
"assets/packages/country_code_picker/flags/gg.png": "cdb11f97802d458cfa686f33459f0d4b",
"assets/packages/country_code_picker/flags/gh.png": "c73432df8a63fb674f93e8424eae545f",
"assets/packages/country_code_picker/flags/gi.png": "58894db0e25e9214ec2271d96d4d1623",
"assets/packages/country_code_picker/flags/gl.png": "d09f355715f608263cf0ceecd3c910ed",
"assets/packages/country_code_picker/flags/gm.png": "c670404188a37f5d347d03947f02e4d7",
"assets/packages/country_code_picker/flags/gn.png": "765a0434cb071ad4090a8ea06797a699",
"assets/packages/country_code_picker/flags/gp.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/packages/country_code_picker/flags/gq.png": "0dc3ca0cda7dfca81244e1571a4c466c",
"assets/packages/country_code_picker/flags/gr.png": "86aeb970a79aa561187fa8162aee2938",
"assets/packages/country_code_picker/flags/gs.png": "524d0f00ee874af0cdf3c00f49fa17ae",
"assets/packages/country_code_picker/flags/gt.png": "df7a020c2f611bdcb3fa8cd2f581b12f",
"assets/packages/country_code_picker/flags/gu.png": "babddec7750bad459ca1289d7ac7fc6a",
"assets/packages/country_code_picker/flags/gw.png": "25bc1b5542dadf2992b025695baf056c",
"assets/packages/country_code_picker/flags/gy.png": "75f8dd61ddedb3cf595075e64fc80432",
"assets/packages/country_code_picker/flags/hk.png": "51df04cf3db3aefd1778761c25a697dd",
"assets/packages/country_code_picker/flags/hm.png": "600835121397ea512cea1f3204278329",
"assets/packages/country_code_picker/flags/hn.png": "09ca9da67a9c84f4fc25f96746162f3c",
"assets/packages/country_code_picker/flags/hr.png": "04cfd167b9564faae3b2dd3ef13a0794",
"assets/packages/country_code_picker/flags/ht.png": "009d5c3627c89310bd25522b636b09bf",
"assets/packages/country_code_picker/flags/hu.png": "66c22db579470694c7928598f6643cc6",
"assets/packages/country_code_picker/flags/id.png": "78d94c7d31fed988e9b92279895d8b05",
"assets/packages/country_code_picker/flags/ie.png": "5790c74e53070646cd8a06eec43e25d6",
"assets/packages/country_code_picker/flags/il.png": "b72b572cc199bf03eba1c008cd00d3cb",
"assets/packages/country_code_picker/flags/im.png": "17ddc1376b22998731ccc5295ba9db1c",
"assets/packages/country_code_picker/flags/in.png": "be8bf440db707c1cc2ff9dd0328414e5",
"assets/packages/country_code_picker/flags/io.png": "8021829259b5030e95f45902d30f137c",
"assets/packages/country_code_picker/flags/iq.png": "dc9f3e8ab93b20c33f4a4852c162dc1e",
"assets/packages/country_code_picker/flags/ir.png": "df9b6d2134d1c5d4d3e676d9857eb675",
"assets/packages/country_code_picker/flags/is.png": "22358dadd1d5fc4f11fcb3c41d453ec0",
"assets/packages/country_code_picker/flags/it.png": "99f67d3c919c7338627d922f552c8794",
"assets/packages/country_code_picker/flags/je.png": "8d6482f71bd0728025134398fc7c6e58",
"assets/packages/country_code_picker/flags/jm.png": "3537217c5eeb048198415d398e0fa19e",
"assets/packages/country_code_picker/flags/jo.png": "d5bfa96801b7ed670ad1be55a7bd94ed",
"assets/packages/country_code_picker/flags/jp.png": "b7a724413be9c2b001112c665d764385",
"assets/packages/country_code_picker/flags/ke.png": "034164976de81ef96f47cfc6f708dde6",
"assets/packages/country_code_picker/flags/kg.png": "a9b6a1b8fe03b8b617f30a28a1d61c12",
"assets/packages/country_code_picker/flags/kh.png": "cd50a67c3b8058585b19a915e3635107",
"assets/packages/country_code_picker/flags/ki.png": "69a7d5a8f6f622e6d2243f3f04d1d4c0",
"assets/packages/country_code_picker/flags/km.png": "204a44c4c89449415168f8f77c4c0d31",
"assets/packages/country_code_picker/flags/kn.png": "65d2fc69949162f1bc14eb9f2da5ecbc",
"assets/packages/country_code_picker/flags/kp.png": "fd6e44b3fe460988afbfd0cb456282b2",
"assets/packages/country_code_picker/flags/kr.png": "9e2a9c7ae07cf8977e8f01200ee2912e",
"assets/packages/country_code_picker/flags/kw.png": "b2afbb748e0b7c0b0c22f53e11e7dd55",
"assets/packages/country_code_picker/flags/ky.png": "666d01aa03ecdf6b96202cdf6b08b732",
"assets/packages/country_code_picker/flags/kz.png": "cfce5cd7842ef8091b7c25b23c3bb069",
"assets/packages/country_code_picker/flags/la.png": "8c88d02c3824eea33af66723d41bb144",
"assets/packages/country_code_picker/flags/lb.png": "b21c8d6f5dd33761983c073f217a0c4f",
"assets/packages/country_code_picker/flags/lc.png": "055c35de209c63b67707c5297ac5079a",
"assets/packages/country_code_picker/flags/li.png": "3cf7e27712e36f277ca79120c447e5d1",
"assets/packages/country_code_picker/flags/lk.png": "56412c68b1d952486f2da6c1318adaf2",
"assets/packages/country_code_picker/flags/lr.png": "1c159507670497f25537ad6f6d64f88d",
"assets/packages/country_code_picker/flags/ls.png": "f2d4025bf560580ab141810a83249df0",
"assets/packages/country_code_picker/flags/lt.png": "e38382f3f7cb60cdccbf381cea594d2d",
"assets/packages/country_code_picker/flags/lu.png": "4cc30d7a4c3c3b98f55824487137680d",
"assets/packages/country_code_picker/flags/lv.png": "6a86b0357df4c815f1dc21e0628aeb5f",
"assets/packages/country_code_picker/flags/ly.png": "777f861e476f1426bf6663fa283243e5",
"assets/packages/country_code_picker/flags/ma.png": "dd5dc19e011755a7610c1e7ccd8abdae",
"assets/packages/country_code_picker/flags/mc.png": "412ce0b1f821e3912e83ae356b30052e",
"assets/packages/country_code_picker/flags/md.png": "7b273f5526b88ed0d632fd0fd8be63be",
"assets/packages/country_code_picker/flags/me.png": "74434a1447106cc4fb7556c76349c3da",
"assets/packages/country_code_picker/flags/mf.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/packages/country_code_picker/flags/mg.png": "a562a819338427e57c57744bb92b1ef1",
"assets/packages/country_code_picker/flags/mh.png": "2a7c77b8b1b4242c6aa8539babe127a7",
"assets/packages/country_code_picker/flags/mk.png": "8b17ec36efa149749b8d3fd59f55974b",
"assets/packages/country_code_picker/flags/ml.png": "1a3a39e5c9f2fdccfb6189a117d04f72",
"assets/packages/country_code_picker/flags/mm.png": "b664dc1c591c3bf34ad4fd223922a439",
"assets/packages/country_code_picker/flags/mn.png": "02af8519f83d06a69068c4c0f6463c8a",
"assets/packages/country_code_picker/flags/mo.png": "da3700f98c1fe1739505297d1efb9e12",
"assets/packages/country_code_picker/flags/mp.png": "60b14b06d1ce23761767b73d54ef613a",
"assets/packages/country_code_picker/flags/mq.png": "446edd9300307eda562e5c9ac307d7f2",
"assets/packages/country_code_picker/flags/mr.png": "733d747ba4ec8cf120d5ebc0852de34a",
"assets/packages/country_code_picker/flags/ms.png": "32daa6ee99335b73cb3c7519cfd14a61",
"assets/packages/country_code_picker/flags/mt.png": "808538b29f6b248469a184bbf787a97f",
"assets/packages/country_code_picker/flags/mu.png": "aec293ef26a9df356ea2f034927b0a74",
"assets/packages/country_code_picker/flags/mv.png": "69843b1ad17352372e70588b9c37c7cc",
"assets/packages/country_code_picker/flags/mw.png": "efc0c58b76be4bf1c3efda589b838132",
"assets/packages/country_code_picker/flags/mx.png": "b69db8e7f14b18ddd0e3769f28137552",
"assets/packages/country_code_picker/flags/my.png": "7b4bc8cdef4f7b237791c01f5e7874f4",
"assets/packages/country_code_picker/flags/mz.png": "40a78c6fa368aed11b3d483cdd6973a5",
"assets/packages/country_code_picker/flags/na.png": "3499146c4205c019196f8a0f7a7aa156",
"assets/packages/country_code_picker/flags/nc.png": "a3ee8fc05db66f7ce64bce533441da7f",
"assets/packages/country_code_picker/flags/ne.png": "a152defcfb049fa960c29098c08e3cd3",
"assets/packages/country_code_picker/flags/nf.png": "9a4a607db5bc122ff071cbfe58040cf7",
"assets/packages/country_code_picker/flags/ng.png": "15b7ad41c03c87b9f30c19d37f457817",
"assets/packages/country_code_picker/flags/ni.png": "6985ed1381cb33a5390258795f72e95a",
"assets/packages/country_code_picker/flags/nl.png": "67f4705e96d15041566913d30b00b127",
"assets/packages/country_code_picker/flags/no.png": "f7f33a43528edcdbbe5f669b538bee2d",
"assets/packages/country_code_picker/flags/np.png": "35e3d64e59650e1f1cf909f5c6d85176",
"assets/packages/country_code_picker/flags/nr.png": "f5ae3c51dfacfd6719202b4b24e20131",
"assets/packages/country_code_picker/flags/nu.png": "c8bb4da14b8ffb703036b1bae542616d",
"assets/packages/country_code_picker/flags/nz.png": "b48a5e047a5868e59c2abcbd8387082d",
"assets/packages/country_code_picker/flags/om.png": "79a867771bd9447d372d5df5ec966b36",
"assets/packages/country_code_picker/flags/pa.png": "49d53d64564555ea5976c20ea9365ea6",
"assets/packages/country_code_picker/flags/pe.png": "724d3525f205dfc8705bb6e66dd5bdff",
"assets/packages/country_code_picker/flags/pf.png": "3ba7f48f96a7189f9511a7f77ea0a7a4",
"assets/packages/country_code_picker/flags/pg.png": "06961c2b216061b0e40cb4221abc2bff",
"assets/packages/country_code_picker/flags/ph.png": "de75e3931c41ae8b9cae8823a9500ca7",
"assets/packages/country_code_picker/flags/pk.png": "0228ceefa355b34e8ec3be8bfd1ddb42",
"assets/packages/country_code_picker/flags/pl.png": "a7b46e3dcd5571d40c3fa8b62b1f334a",
"assets/packages/country_code_picker/flags/pm.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/packages/country_code_picker/flags/pn.png": "ffa91e8a1df1eac6b36d737aa76d701b",
"assets/packages/country_code_picker/flags/pr.png": "ac1c4bcef3da2034e1668ab1e95ae82d",
"assets/packages/country_code_picker/flags/ps.png": "b6e1bd808cf8e5e3cd2b23e9cf98d12e",
"assets/packages/country_code_picker/flags/pt.png": "b4cf39fbafb4930dec94f416e71fc232",
"assets/packages/country_code_picker/flags/pw.png": "92ec1edf965de757bc3cca816f4cebbd",
"assets/packages/country_code_picker/flags/py.png": "6bb880f2dd24622093ac59d4959ae70d",
"assets/packages/country_code_picker/flags/qa.png": "b95e814a13e5960e28042347cec5bc0d",
"assets/packages/country_code_picker/flags/re.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/packages/country_code_picker/flags/ro.png": "1ee3ca39dbe79f78d7fa903e65161fdb",
"assets/packages/country_code_picker/flags/rs.png": "ee9ae3b80531d6d0352a39a56c5130c0",
"assets/packages/country_code_picker/flags/ru.png": "9a3b50fcf2f7ae2c33aa48b91ab6cd85",
"assets/packages/country_code_picker/flags/rw.png": "6ef05d29d0cded56482b1ad17f49e186",
"assets/packages/country_code_picker/flags/sa.png": "ef836bd02f745af03aa0d01003942d44",
"assets/packages/country_code_picker/flags/sb.png": "e3a6704b7ba2621480d7074a6e359b03",
"assets/packages/country_code_picker/flags/sc.png": "52f9bd111531041468c89ce9da951026",
"assets/packages/country_code_picker/flags/sd.png": "93e252f26bead630c0a0870de5a88f14",
"assets/packages/country_code_picker/flags/se.png": "24d2bed25b5aad316134039c2903ac59",
"assets/packages/country_code_picker/flags/sg.png": "94ea82acf1aa0ea96f58c6b0cd1ed452",
"assets/packages/country_code_picker/flags/sh.png": "fc5305efe4f16b63fb507606789cc916",
"assets/packages/country_code_picker/flags/si.png": "922d047a95387277f84fdc246f0a8d11",
"assets/packages/country_code_picker/flags/sj.png": "f7f33a43528edcdbbe5f669b538bee2d",
"assets/packages/country_code_picker/flags/sk.png": "0f8da623c8f140ac2b5a61234dd3e7cd",
"assets/packages/country_code_picker/flags/sl.png": "a7785c2c81149afab11a5fa86ee0edae",
"assets/packages/country_code_picker/flags/sm.png": "b41d5b7eb3679c2e477fbd25f5ee9e7d",
"assets/packages/country_code_picker/flags/sn.png": "25201e1833a1b642c66c52a09b43f71e",
"assets/packages/country_code_picker/flags/so.png": "cfe6bb95bcd259a3cc41a09ee7ca568b",
"assets/packages/country_code_picker/flags/sr.png": "e5719b1a8ded4e5230f6bac3efc74a90",
"assets/packages/country_code_picker/flags/ss.png": "f1c99aded110fc8a0bc85cd6c63895fb",
"assets/packages/country_code_picker/flags/st.png": "7a28a4f0333bf4fb4f34b68e65c04637",
"assets/packages/country_code_picker/flags/sv.png": "994c8315ced2a4d8c728010447371ea1",
"assets/packages/country_code_picker/flags/sx.png": "8fce7986b531ff8936540ad1155a5df5",
"assets/packages/country_code_picker/flags/sy.png": "2e33ad23bffc935e4a06128bc5519a2b",
"assets/packages/country_code_picker/flags/sz.png": "5e45a755ac4b33df811f0fb76585270e",
"assets/packages/country_code_picker/flags/tc.png": "6f2d1a2b9f887be4b3568169e297a506",
"assets/packages/country_code_picker/flags/td.png": "51b129223db46adc71f9df00c93c2868",
"assets/packages/country_code_picker/flags/tf.png": "dc3f8c0d9127aa82cbd45b8861a67bf5",
"assets/packages/country_code_picker/flags/tg.png": "82dabd3a1a4900ae4866a4da65f373e5",
"assets/packages/country_code_picker/flags/th.png": "d4bd67d33ed4ac74b4e9b75d853dae02",
"assets/packages/country_code_picker/flags/tj.png": "2407ba3e581ffd6c2c6b28e9692f9e39",
"assets/packages/country_code_picker/flags/tk.png": "87e390b384b39af41afd489e42b03e07",
"assets/packages/country_code_picker/flags/tl.png": "b3475faa9840f875e5ec38b0e6a6c170",
"assets/packages/country_code_picker/flags/tm.png": "3fe5e44793aad4e8997c175bc72fda06",
"assets/packages/country_code_picker/flags/tn.png": "87f591537e0a5f01bb10fe941798d4e4",
"assets/packages/country_code_picker/flags/to.png": "a93fdd2ace7777e70528936a135f1610",
"assets/packages/country_code_picker/flags/tr.png": "0100620dedad6034185d0d53f80287bd",
"assets/packages/country_code_picker/flags/tt.png": "716fa6f4728a25ffccaf3770f5f05f7b",
"assets/packages/country_code_picker/flags/tv.png": "493c543f07de75f222d8a76506c57989",
"assets/packages/country_code_picker/flags/tw.png": "94322a94d308c89d1bc7146e05f1d3e5",
"assets/packages/country_code_picker/flags/tz.png": "389451347d28584d88b199f0cbe0116b",
"assets/packages/country_code_picker/flags/ua.png": "dbd97cfa852ffc84bfdf98bc2a2c3789",
"assets/packages/country_code_picker/flags/ug.png": "6ae26af3162e5e3408cb5c5e1c968047",
"assets/packages/country_code_picker/flags/um.png": "b1cb710eb57a54bc3eea8e4fba79b2c1",
"assets/packages/country_code_picker/flags/us.png": "b1cb710eb57a54bc3eea8e4fba79b2c1",
"assets/packages/country_code_picker/flags/uy.png": "20c63ac48df3e394fa242d430276a988",
"assets/packages/country_code_picker/flags/uz.png": "d3713ea19c37aaf94975c3354edd7bb7",
"assets/packages/country_code_picker/flags/va.png": "cfbf48f8fcaded75f186d10e9d1408fd",
"assets/packages/country_code_picker/flags/vc.png": "a604d5acd8c7be6a2bbaa1759ac2949d",
"assets/packages/country_code_picker/flags/ve.png": "f5dabf05e3a70b4eeffa5dad32d10a67",
"assets/packages/country_code_picker/flags/vg.png": "0f19ce4f3c92b0917902cb316be492ba",
"assets/packages/country_code_picker/flags/vi.png": "944281795d5daf17a273f394e51b8b79",
"assets/packages/country_code_picker/flags/vn.png": "7c8f8457485f14482dcab4042e432e87",
"assets/packages/country_code_picker/flags/vu.png": "1bed31828f3b7e0ff260f61ab45396ad",
"assets/packages/country_code_picker/flags/wf.png": "4d33c71f87a33e47a0e466191c4eb3db",
"assets/packages/country_code_picker/flags/ws.png": "8cef2c9761d3c8107145d038bf1417ea",
"assets/packages/country_code_picker/flags/xk.png": "b75ba9ad218b109fca4ef1f3030936f1",
"assets/packages/country_code_picker/flags/ye.png": "1d5dcbcbbc8de944c3db228f0c089569",
"assets/packages/country_code_picker/flags/yt.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/packages/country_code_picker/flags/za.png": "aa749828e6cf1a3393e0d5c9ab088af0",
"assets/packages/country_code_picker/flags/zm.png": "29b67848f5e3864213c84ccf108108ea",
"assets/packages/country_code_picker/flags/zw.png": "d5c4fe9318ebc1a68e3445617215195f",
"assets/packages/country_code_picker/src/i18n/af.json": "56c2bccb2affb253d9f275496b594453",
"assets/packages/country_code_picker/src/i18n/am.json": "d32ed11596bd0714c9fce1f1bfc3f16e",
"assets/packages/country_code_picker/src/i18n/ar.json": "fcc06d7c93de78066b89f0030cdc5fe3",
"assets/packages/country_code_picker/src/i18n/az.json": "430fd5cb15ab8126b9870261225c4032",
"assets/packages/country_code_picker/src/i18n/be.json": "b3ded71bde8fbbdac0bf9c53b3f66fff",
"assets/packages/country_code_picker/src/i18n/bg.json": "fc2f396a23bf35047919002a68cc544c",
"assets/packages/country_code_picker/src/i18n/bn.json": "1d49af56e39dea0cf602c0c22046d24c",
"assets/packages/country_code_picker/src/i18n/bs.json": "8fa362bc16f28b5ca0e05e82536d9bd9",
"assets/packages/country_code_picker/src/i18n/ca.json": "cdf37aa8bb59b485e9b566bff8523059",
"assets/packages/country_code_picker/src/i18n/cs.json": "7cb74ecb8d6696ba6f333ae1cfae59eb",
"assets/packages/country_code_picker/src/i18n/da.json": "bb4a77f6bfaf82e4ed0b57ec41e289aa",
"assets/packages/country_code_picker/src/i18n/de.json": "a56eb56282590b138102ff72d64420f4",
"assets/packages/country_code_picker/src/i18n/el.json": "e4da1a5d8ab9c6418036307d54a9aa16",
"assets/packages/country_code_picker/src/i18n/en.json": "759bf8bef6af283a25d7a2204bdf3d78",
"assets/packages/country_code_picker/src/i18n/es.json": "c9f37c216b3cead47636b86c1b383d20",
"assets/packages/country_code_picker/src/i18n/et.json": "a5d4f54704d2cdabb368760399d3cae5",
"assets/packages/country_code_picker/src/i18n/fa.json": "baefec44af8cd45714204adbc6be15cb",
"assets/packages/country_code_picker/src/i18n/fi.json": "3ad6c7d3efbb4b1041d087a0ef4a70b9",
"assets/packages/country_code_picker/src/i18n/fr.json": "b9be4d0a12f9d7c3b8fcf6ce41facd0b",
"assets/packages/country_code_picker/src/i18n/gl.json": "14e84ea53fe4e3cef19ee3ad2dff3967",
"assets/packages/country_code_picker/src/i18n/ha.json": "4d0c8114bf4e4fd1e68d71ff3af6528f",
"assets/packages/country_code_picker/src/i18n/he.json": "6f7a03d60b73a8c5f574188370859d12",
"assets/packages/country_code_picker/src/i18n/hi.json": "3dac80dc00dc7c73c498a1de439840b4",
"assets/packages/country_code_picker/src/i18n/hr.json": "e7a48f3455a0d27c0fa55fa9cbf02095",
"assets/packages/country_code_picker/src/i18n/hu.json": "3cd9c2280221102780d44b3565db7784",
"assets/packages/country_code_picker/src/i18n/hy.json": "1e2f6d1808d039d7db0e7e335f1a7c77",
"assets/packages/country_code_picker/src/i18n/id.json": "e472d1d00471f86800572e85c3f3d447",
"assets/packages/country_code_picker/src/i18n/is.json": "6cf088d727cd0db23f935be9f20456bb",
"assets/packages/country_code_picker/src/i18n/it.json": "c1f0d5c4e81605566fcb7f399d800768",
"assets/packages/country_code_picker/src/i18n/ja.json": "3f709dc6a477636eff4bfde1bd2d55e1",
"assets/packages/country_code_picker/src/i18n/ka.json": "23c8b2028efe71dab58f3cee32eada43",
"assets/packages/country_code_picker/src/i18n/kk.json": "bca3f77a658313bbe950fbc9be504fac",
"assets/packages/country_code_picker/src/i18n/km.json": "19fedcf05e4fd3dd117d24e24b498937",
"assets/packages/country_code_picker/src/i18n/ko.json": "76484ad0eb25412d4c9be010bca5baf0",
"assets/packages/country_code_picker/src/i18n/ku.json": "4c743e7dd3d124cb83602d20205d887c",
"assets/packages/country_code_picker/src/i18n/ky.json": "51dff3d9ff6de3775bc0ffeefe6d36cb",
"assets/packages/country_code_picker/src/i18n/lt.json": "21cacbfa0a4988d180feb3f6a2326660",
"assets/packages/country_code_picker/src/i18n/lv.json": "1c83c9664e00dce79faeeec714729a26",
"assets/packages/country_code_picker/src/i18n/mk.json": "899e90341af48b31ffc8454325b454b2",
"assets/packages/country_code_picker/src/i18n/ml.json": "096da4f99b9bd77d3fe81dfdc52f279f",
"assets/packages/country_code_picker/src/i18n/mn.json": "6f69ca7a6a08753da82cb8437f39e9a9",
"assets/packages/country_code_picker/src/i18n/ms.json": "826babac24d0d842981eb4d5b2249ad6",
"assets/packages/country_code_picker/src/i18n/nb.json": "c0f89428782cd8f5ab172621a00be3d0",
"assets/packages/country_code_picker/src/i18n/nl.json": "20d4bf89d3aa323f7eb448a501f487e1",
"assets/packages/country_code_picker/src/i18n/nn.json": "129e66510d6bcb8b24b2974719e9f395",
"assets/packages/country_code_picker/src/i18n/no.json": "7a5ef724172bd1d2515ac5d7b0a87366",
"assets/packages/country_code_picker/src/i18n/pl.json": "78cbb04b3c9e7d27b846ee6a5a82a77b",
"assets/packages/country_code_picker/src/i18n/ps.json": "ab8348fd97d6ceddc4a509e330433caa",
"assets/packages/country_code_picker/src/i18n/pt.json": "bd7829884fd97de8243cba4257ab79b2",
"assets/packages/country_code_picker/src/i18n/ro.json": "c38a38f06203156fbd31de4daa4f710a",
"assets/packages/country_code_picker/src/i18n/ru.json": "aaf6b2672ef507944e74296ea719f3b2",
"assets/packages/country_code_picker/src/i18n/sd.json": "281e13e4ec4df824094e1e64f2d185a7",
"assets/packages/country_code_picker/src/i18n/sk.json": "3c52ed27adaaf54602fba85158686d5a",
"assets/packages/country_code_picker/src/i18n/sl.json": "4a88461ce43941d4a52594a65414e98f",
"assets/packages/country_code_picker/src/i18n/so.json": "09e1f045e22b85a7f54dd2edc446b0e8",
"assets/packages/country_code_picker/src/i18n/sq.json": "0aa6432ab040153355d88895aa48a72f",
"assets/packages/country_code_picker/src/i18n/sr.json": "69a10a0b63edb61e01bc1ba7ba6822e4",
"assets/packages/country_code_picker/src/i18n/sv.json": "7a6a6a8a91ca86bb0b9e7f276d505896",
"assets/packages/country_code_picker/src/i18n/ta.json": "48b6617bde902cf72e0ff1731fadfd07",
"assets/packages/country_code_picker/src/i18n/tg.json": "5512d16cb77eb6ba335c60b16a22578b",
"assets/packages/country_code_picker/src/i18n/th.json": "721b2e8e586eb7c7da63a18b5aa3a810",
"assets/packages/country_code_picker/src/i18n/tr.json": "d682217c3ccdd9cc270596fe1af7a182",
"assets/packages/country_code_picker/src/i18n/tt.json": "e3687dceb189c2f6600137308a11b22f",
"assets/packages/country_code_picker/src/i18n/ug.json": "e2be27143deb176fa325ab9b229d8fd8",
"assets/packages/country_code_picker/src/i18n/uk.json": "a7069f447eb0060aa387a649e062c895",
"assets/packages/country_code_picker/src/i18n/ur.json": "b5bc6921e006ae9292ed09e0eb902716",
"assets/packages/country_code_picker/src/i18n/uz.json": "00e22e3eb3a7198f0218780f2b04369c",
"assets/packages/country_code_picker/src/i18n/vi.json": "fa3d9a3c9c0d0a20d0bd5e6ac1e97835",
"assets/packages/country_code_picker/src/i18n/zh.json": "44a9040959b2049350bbff0696b84d45",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "c6cd9887d9268f0c5f4c0c9e41211027",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "c00145a8c973f2547a64aeea6f14c0c9",
"firebase-messaging-sw.js": "361f75447bc902e64249f6de991388dc",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "16e105eb4b6055eff5003b441cad8fd8",
"icons/Icon-192.png": "d126c6a330fa4b4dbe90764e21ff2d51",
"icons/Icon-512.png": "d126c6a330fa4b4dbe90764e21ff2d51",
"index.html": "7488915f765bde4db3e779d3ebae4ce7",
"/": "7488915f765bde4db3e779d3ebae4ce7",
"logo.png": "d126c6a330fa4b4dbe90764e21ff2d51",
"main.dart.js": "35b1bfba0edaa79e2ea408806efafebf",
"manifest.json": "c7de6ab718aef68bbba6bb6b58e03a21",
"style.css": "d3582b5cab2857eb8ce84ef0266d3e15",
"version.json": "4d9db958aa9e856e780dc2b669465d97"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
