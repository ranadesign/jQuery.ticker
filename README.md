#&quot;jQuery.twSearchList&quot; jQuery plugin

##Description
一行のテキストが横に流れるティッカーを表示するjQueryプラグインです。

---
##Required
###jQuery (Developed on 1.7.1)
http://jquery.com/

---
##Demos
http://kaelab.ranadesign.com/blog/demo/jquery-ticker/

---
##Usage

###Step01
head要素内で jquery.js、jquery.ticker.jsを順番に読み込みます。

	<script src="jquery.js"></script>
	<script src="jquery.ticker.js"></script>

###Step02
コンテンツを構成する要素にはCSSで float:left; などを指定し、横並びになるようにします。

	<style>
		.ticker-item {
			float: left;
			display: inline-block;
			*display: inline;
			*zoom: 1;
		}
	</style>
	...
	<div id="ticker1">
		<div class="ticker-item"> ... </div>
		<div class="ticker-item"> ... </div>
		<div class="ticker-item"> ... </div>
	</div>


###Step03
Step01の通りスクリプトファイルを読み込んだ後に、以下の例のように実行します。
コンテナとなる要素をjQueryセレクタで指定して、実行します。引数でオプションを指定できます。

	<script>
	$(function() {
		$('#ticker1').ticker({
			// some options...
		});
	});
	</script>
	...
	<div id="ticker1">
		<div class="ticker-item"> ... </div>
		<div class="ticker-item"> ... </div>
		<div class="ticker-item"> ... </div>
	</div>

オプションの一覧は次の表の通りです。

<table border="1">
<colgroup span="1" class="colh">
<colgroup span="1" class="colh">
<colgroup span="1" class="cold">
<thead>
<tr>
<th>オプション名<br>(option name)</th>
<th>デフォルト値<br>(default value)</th>
<th>型<br>（data type）</th>
<th>備考<br>(note)</th>
</tr>
</thead>
<tbody>

<tr>
<td>duration</td>
<td>500</td>
<td>Number</td>
<td>アニメーションにかける時間。短い程、速くなる</td>
</tr>
<tr>
<td>wrapperClassName</td>
<td>"ticker-wrapper"</td>
<td>String</td>
<td>コンテンツを包むdivのクラス名</td>
</tr>
<tr>
<td>innerClassName</td>
<td>"ticker-inner"</td>
<td>String</td>
<td>コンテンツを包むdivのクラス名。先述のwrapperより内側の要素となる</td>
</tr>
<tr>
<td>contentSelector</td>
<td>".ticker-item"</td>
<td>String<br>(Selector String for jQuery)</td>
<td>コンテンツを構成する要素を選択するためのセレクタ。このセレクタで選択されたものの横幅が考慮され、レイアウトの再構築が行われる</td>
</tr>
</tbody>
</table>

---
##License
<a href="http://www.opensource.org/licenses/mit-license.html">MIT License</a><br />
参考: <a href="https://secure.wikimedia.org/wikipedia/ja/wiki/MIT_License">MIT License - Wikipedia</a>

---
##Contact
<a href="http://kaelab.ranadesign.com/blog/author/naoki-sekiguchi/">Naoki Sekiguchi - かえラボBlog</a>
