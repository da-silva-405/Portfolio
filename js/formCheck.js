const $form = document.getElementById('form');
const $submit = document.getElementById('submit');

// 親要素(form)にイベントをつけると子要素のイベントが拾える
$form.addEventListener('change', update);
$form.addEventListener('input', update);

// デフォルトではEnterキー押下でも送信されてしまうのでsubmitイベントで制御する
$form.addEventListener('submit', () => {
	e.preventDefault();
	//$form.submit();
});

function update(e) {
  // バリデーションが総合的に通っているかどうかのフラグ
  const isValid = $form.checkValidity();	//checkValidity→ input要素の入力内容の検証（boolean型）

  if (isValid) {  // 通っていれば活性化
    $submit.removeAttribute('disabled');
    return;
  }
  // 通っていなければ非活性にする
  $submit.setAttribute('disabled', 'disabled');
}