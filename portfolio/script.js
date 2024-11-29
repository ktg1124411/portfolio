function openPopup(company) {
    let popupContent = "";

    if (company === "KJ") {
        popupContent = `
            <!DOCTYPE html>
            <html lang="ja">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>有限会社KJ の経歴</title>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet">
                <style>
                    body {
                        font-family: 'Noto Sans JP', sans-serif;
                        margin: 20px;
                        line-height: 1.6;
                        color: #333;
                    }
                    h1 {
                        text-align: center;
                        color: #333;
                        margin-bottom: 20px;
                    }
                    p, ul {
                        font-size: 16px;
                    }
                    ul {
                        margin-top: 10px;
                        padding-left: 20px;
                        list-style-type: disc;
                    }
                    li {
                        margin-bottom: 8px;
                    }
                    button {
                        display: block;
                        margin: 20px auto;
                        padding: 10px 20px;
                        background-color: #f04f47;
                        color: white;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        font-family: 'Noto Sans JP', sans-serif;
                    }
                </style>
            </head>
            <body>
                <h1>有限会社KJ の経歴</h1>
                <p><strong>【職責】副店長</strong></p>
                <p><strong>【期間】2020年9月～2022年12月</strong></p>
                <p><strong>【業務内容】</strong></p>
                <p>カントンの思い出配属（正社員）</p>
                <ul>
                    <li>副店長業務（店舗運営、売上管理）</li>
                    <li>データベース構築（Excelで構築）</li>
                    <li>スタッフ評価、評価基準等の管理</li>
                    <li>店舗運営業務:</li>
                    <ul>
                        <li>接客業務</li>
                        <li>発注業務</li>
                        <li>棚卸し作業</li>
                        <li>スタッフ教育</li>
                        <li>スタッフ評価</li>
                        <li>売上管理</li>
                        <li>食べログ、ホットペッパー店舗ページ管理</li>
                        <li>店舗SNS運営</li>
                        <li>シフト作成</li>
                    </ul>
                </ul>
                <p><strong>【主な取り組み】</strong></p>
                <ul>
                    <li>SNSで顧客とコミュニケーション</li>
                    <ul>
                        <li>店舗SNSを運営し、イベントを広報。顧客とのやり取りを通じてリピーター顧客を確保。</li>
                        <li>数量限定メニューを開発し、全量販売を完了。平均売上3%向上に寄与。</li>
                    </ul>
                    <li>マニュアル再作成</li>
                    <ul>
                        <li>顧客対応、動線再配置、締め作業マニュアルを再作成。</li>
                        <li>業務効率を向上し、同じ売上で人件費を平均2%削減。</li>
                    </ul>
                </ul>
                <button onclick="window.close()">閉じる</button>
            </body>
            </html>
        `;
    } else if (company === "EightZero") {
        popupContent = `
            <!DOCTYPE html>
            <html lang="ja">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>株式会社エイトゼロ の経歴</title>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet">
                <style>
                    body {
                        font-family: 'Noto Sans JP', sans-serif;
                        margin: 20px;
                        line-height: 1.6;
                        color: #333;
                    }
                    h1 {
                        text-align: center;
                        color: #333;
                        margin-bottom: 20px;
                    }
                    p, ul {
                        font-size: 16px;
                    }
                    ul {
                        margin-top: 10px;
                        padding-left: 20px;
                        list-style-type: disc;
                    }
                    li {
                        margin-bottom: 8px;
                    }
                    button {
                        display: block;
                        margin: 20px auto;
                        padding: 10px 20px;
                        background-color: #f04f47;
                        color: white;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        font-family: 'Noto Sans JP', sans-serif;
                    }
                </style>
            </head>
            <body>
                <h1>株式会社エイトゼロ の経歴</h1>
                <p><strong>【職責】店長件本部企画</strong></p>
                <p><strong>【期間】2023年1月～現在在職中</strong></p>
                <p><strong>【業務内容】</strong></p>
                <p>西新宿スシエビス配属（正社員）</p>
                <ul>
                    <li>店長業務（店舗運営、売上管理）</li>
                    <li>データベース構築（Excelで構築）</li>
                    <li>スタッフ評価、評価基準等の管理</li>
                    <li>材料による原価を計算・管理</li>
                    <li>発注業務、棚卸し作業</li>
                    <li>スタッフ教育のマニュアル作成、教育、評価基準作成</li>
                    <li>商品企画（コース、イベント）</li>
                    <li>食べログ、ホットペッパー店舗ページ管理</li>
                    <li>PL, FL作成、管理</li>
                    <li>マーケティング:</li>
                    <ul>
                        <li>掲示用コンテンツの作成、編集</li>
                        <li>フォロワーとのコミュニケーション交流（コメントへの返信等）</li>
                        <li>プロモーション、キャンペーンの運営（タイムセール、当日限定イベント等）</li>
                    </ul>
                    <li>スタッフの動線設計</li>
                    <li>インバウンド向けのお寿司体験担当でシナリオ、体験内容作成</li>
                </ul>
                <p><strong>【主な取り組み】</strong></p>
                <ul>
                    <li>POP企画、作成</li>
                    <ul>
                        <li>シーズンメニュー、マーケティングプロモーションポスターなどの企画・編集を担当。</li>
                    </ul>
                    <li>外国語メニュー作成（2024年度）</li>
                    <ul>
                        <li>コロナ以降増加する外国人客対応のため、外国語マニュアル作成。</li>
                        <li>メニュー開発により客単価30%上昇。</li>
                    </ul>
                </ul>
                <button onclick="window.close()">閉じる</button>
            </body>
            </html>
        `;
    }

    const popupWindow = window.open("", "_blank", "width=600,height=600,scrollbars=yes");
    popupWindow.document.write(popupContent);
    popupWindow.document.close();
}
// 팝업 창을 열고 자기 PR 내용을 띄우는 함수
function openPRPopup() {
    const popupContent = `
        <!DOCTYPE html>
        <html lang="ja">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>自己PR</title>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet">
            <style>
                body {
                    font-family: 'Noto Sans JP', sans-serif;
                    margin: 20px;
                    line-height: 1.6;
                    color: #333;
                }
                h1 {
                    text-align: center;
                    color: #333;
                    margin-bottom: 20px;
                }
                p, ul {
                    font-size: 16px;
                }
                ul {
                    margin-top: 10px;
                    padding-left: 20px;
                    list-style-type: disc;
                }
                li {
                    margin-bottom: 8px;
                }
                button {
                    display: block;
                    margin: 20px auto;
                    padding: 10px 20px;
                    background-color: #f04f47;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-family: 'Noto Sans JP', sans-serif;
                }
            </style>
        </head>
        <body>
            <h1>自己PR</h1>
            <p><strong>＜些細なことを覚える能力＞</strong></p>
            <p>私は些細なことを覚える能力があります。チームメンバーとの会話やお客様とのやり取りで、簡単に通り過ぎてしまうような小さな言葉も覚え、相手の性格を把握して、適切な配慮を行うことができます。このようにして、チーム内でも信頼を得て、良き仲間として認められることができました。</p>
            <p>特に、お客様のニーズを把握する能力には自信があります。前職では、常連客の特徴を覚え、彼らが何を好むかを理解し、より良いサービスを提供しました。その結果、常連客を増やすことに成功しました。</p>

            <p><strong>＜いつも率先垂範＞</strong></p>
            <p>私は率先垂範を大切にしてきました。店長として勤務していた時、最も悩んでいたことの一つは「どのようにしてチームメンバーが自発的に楽しんで働けるようにするか」ということでした。特に外国人店長として、どのようにアプローチすべきかを多く考えました。そこで、私はまずすべての仕事を率先して行うことを始めました。</p>
            <p>「自分が嫌なことは、誰もやりたくない。自分がまずやらないと、誰もやらない」というマインドで取り組み、良い店長としてチームを引っ張ることができたと思います。</p>

            <p><strong>＜仕事は常に計画的かつ効率的に＞</strong></p>
            <p>私は子どもの頃から常に次の仕事や計画について考える習慣が身についていました。例えば、旅行に行く際にも、行き先、移動手段、費用、食事のメニューや価格など、細かい部分まで計画を立てることが日常になっていました。</p>
            <p>実際に、店長として配属された店舗で閉店業務を改善し、スタッフやアルバイトの退勤時間を短縮することで、以前よりも人件費を3%削減するという成果を上げた経験があります。</p>
            <button onclick="window.close()">閉じる</button>
        </body>
        </html>
    `;

    const popupWindow = window.open("", "_blank", "width=600,height=600,scrollbars=yes");
    popupWindow.document.write(popupContent);
    popupWindow.document.close();
}
function openSelfIntroduction() {
    let popupContent = `
        <!DOCTYPE html>
        <html lang="ja">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>自己紹介</title>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet">
            <style>
                body {
                    font-family: 'Noto Sans JP', sans-serif;
                    margin: 20px;
                    line-height: 1.6;
                    color: #333;
                }
                h1 {
                    text-align: center;
                    color: #333;
                    margin-bottom: 20px;
                }
                p {
                    font-size: 16px;
                    margin-bottom: 10px;
                }
                button {
                    display: block;
                    margin: 20px auto;
                    padding: 10px 20px;
                    background-color: #f04f47;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-family: 'Noto Sans JP', sans-serif;
                }
            </style>
        </head>
        <body>
            <h1>自己紹介</h1>
            <p>はじめまして、今度御社の地域正社員に応募したキムヒョンジュンと申します。</p>
            <p>私は韓国でDANKOOK大学新素材工学科を卒業し、日本には2020年ワーキングホリデーで来ました。その後有限会社KJに入社して、飲食店で店舗社員として社会人を始めて、現状株式会社エイトゼロでスシエビスというお店で店長として店舗運営や売り上げ管理業務を中心に、本社の企画業務や翻訳業務も担当しています。</p>
            <p>現職で培ったマネジメントやコミュニケーション力を活かして御社の成長にも貢献したいと思います。</p>
            <button onclick="window.close()">閉じる</button>
        </body>
        </html>
    `;

    const popupWindow = window.open("", "_blank", "width=600,height=600,scrollbars=yes");
    popupWindow.document.write(popupContent);
    popupWindow.document.close();
}
