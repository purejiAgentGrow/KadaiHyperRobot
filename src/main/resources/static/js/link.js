/* link.js 
   ボタン押下で他ページへ遷移。
   <a>タグでもよいが、ボタンで遷移したいのと、HTMLの簡略化。
	 要jQuery
*/

$(document).ready(function(){
	/* 誤クリックを防止するため、モーダルウィンドウを出すのも一手*/
	/* トップ画面への遷移 */
	$('.link_top').on('click',function(){
		location.href='/';
	});

	/* ソリティア画面への遷移 */
	$('.link_solo').on('click',function(){
		location.href='/solo';
	});
	
	/* ユーザ画面への遷移 */
	$('.link_user').on('click',function(){
		location.href='/user';
	});

	/* 通信対戦画面への遷移 */
	$('.link_arena').on('click',function(){
		location.href='/arena';
	});

});