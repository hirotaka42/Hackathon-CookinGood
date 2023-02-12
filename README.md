# Hackathon_Cookingood



## How to Setup

### node.jsを初めてセットアップする人はここから
voltaを使用したNode.jsのインストール  
https://formulae.brew.sh/formula/volta#default
```
# macのパッケージサービスからvoltaのインストール
brew install volta

# Node.js バージョン18の最新 LTS をインストール
volta install node@18

# インストールの確認
node -v
npm -v
```

### node.jsセットアップ済みの人はここから

```
# リポジトリのクローン
git clone https://github.com/hirotaka42/Hackathon_Cookingood.git
cd Hackathon_Cookingood
# or
ghq get https://github.com/hirotaka42/Hackathon_Cookingood.git

# 実行
cd ./cookingood
npm start

# open http://localhost:3000
```


### 使用パッケージ

React Router v6   
react-countdown-circle-timer  

```
npm install react-router-dom@6
npm install react-countdown-circle-timer
```
