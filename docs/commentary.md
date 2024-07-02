# ヒント解答

## Scene 0 ~ 6 + Checkpoint A 

### Scene 0

**解答**

チュートリアルに従い、キーを以下の順番で押すとクリアできます。

1. 「右矢印キー」: 3回
2. 「スペースキー」: 1回
3. 「右矢印キー」: 3回
4. 「エンターキー」: 1回

「スペースキー」を押すことで、マスと矢印のフォーカスを切り替えることができます。以下、マスへフォーカスが当たっているときのモードを「マスモード」、矢印へフォーカスが当たっているときのモードを「入力モード」と呼びます。

「マスモード」では、左右の矢印キーでマスの表示を切り替えることができます。

「入力モード」では、「↑」「→」「↓」「←」の矢印キーのみを入力として受け付けます。正しい入力を行った状態で「エンターキー」を押すと、クリアとなります。また、「デリートキー」「バックスペースキー」を押すと、1矢印削除することができます。なお、「マスモード」での矢印キーの入力は解答に影響しません。

したがって、以下のキー入力でもクリア可能です。

1. 「スペースキー」: 1回
2. 「右矢印キー」: 3回
3. 「エンターキー」: 1回

以下、解答として、入力モードでのキー入力のみを省略して記述します。

例えば、`↑3`は「上矢印キー」を3回入力することを示します。
他の例として、`↓1→4`は「下矢印キー」を1回、次に「右矢印キー」を4回入力することを示します。

したがって、「Scene 0」の解答は以下の通りです。

解答例: `→3`

## Scene 1

**ヒント1**

「右矢印キー」5回では、クリアすることができません。

本ゲームは「マスモード」の表示をもとに、「入力モード」でそれに対応する適切な入力を行うことでクリアすることができます。

**ヒント2**

もし「HAZE: STAGE 1」でこのようなマスの表示があった場合、あなたはどのようなマス移動を行っていたでしょうか？

**解答**

「MIST」は、マスの表示からそれに対応する移動を推測するゲームです。

太い枠線はその方向に黒マスが隣接していることを示し、細い枠線はその方向に白マスが隣接していることを示します。

マスの左上に表示されている小さな数字を以下「インデックス」と呼ぶことにします。インデックスはSからGに到達するまでの移動回数です。

例えば、インデックス2から3への移動について考えてみましょう。インデックス2のマスは、左と下が白マスであり、インデックス3のマスは上と右が白マスです。したがって、インデックス2から3は上下に隣接しており、インデックス2から3へ下方向に移動していると考えられます。

他のマスについても同様に考えてみると、以下のように移動が決定されます。

解答例: `→2↓1→2`

## Scene 2

**解答**

「Scene 1」の解説を参考に、マスの表示からそれに対応する移動を推測しましょう。

解答例: `↓1←1→1↑2←1→1↑1→1`

## Scene 3

**ヒント1**

インデックス7から8の変化では、全くマスが表示されています。

ここで考えるべきは、マスに表示されている数字の意味です。これまでのSceneを振り返ってみましょう。

**ヒント2**

マスに表示されている数字はGまでの最短移動回数を示しています。したがって、インデックス7と8のマスは全く同一のマスであり、移動していません。移動していないことを矢印キーの入力で表現しましょう。

**ヒント3**

「HAZE: STAGE 1」でこのようなマスの表示があった場合、あなたはどのようなキー入力を行っていたでしょうか？

**解答**

インデックス7から8の変化では移動しなかった、すなわち、黒マス方向に進もうとしたが進めなかったことを示します。したがって、インデックス7から8の変化に対応する移動は、黒マス方向に進む入力である「→」です。

これは、「HAZE: STAGE 1」でも同様の挙動を示します。

解答例: `↓1←1→1↑2←1→2↑1→1`

## Scene 4

数字が表示されなくなりました。

**解答**

解答例: `→3`

## Scene 5

**解答**

例えば、SからGまで右に1直線に並んでいる場合が考えられます。

解答例: `→5`

## Scene 6