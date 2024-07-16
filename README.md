
這是一個使用 Node.js、Express 和 MongoDB 所建置的 To-Do List。並使用 Axios 獲取所需資源。

## 功能 (Features)

- 使用者可以新增待辦事項。
- 若使用者不想要某個待辦事項，可以透過 "垃圾桶" 圖示進行刪除。
- 使用者若想更改待辦事項，可以透過 "更改" 按鈕重新編輯。
- 使用者可以標記是否完成。

## 安裝 (Installation)

1. clone 本專案至本機電腦。

```
git clone https://github.com/wang-yin/todo-list.git
```

2. 進入此專案資料夾。

```
cd todo-list
```

3. 安裝套件。

```
npm install
```

4. 新增 .env 檔案。

```
MONGODB_URI=(your mongoDB URI)
PORT=3000
```

5. 運行專案。

```
npm run start
```


在瀏覽器輸入 [http://localhost:3000](http://localhost:3000) 來使用此專案。

## 圖片 (Screenshots)
![image](https://github.com/wang-yin/todo-list/blob/main/screenshots/todo.png)

## 使用工具 (Tools)

- 開發環境：[Visual Studio Code](https://visualstudio.microsoft.com/zh-hant/)
- 應用程式框架：[Express](https://www.npmjs.com/package/express)
- 樣版引擎：[Express-handlebars](https://www.npmjs.com/package/express-handlebars)
- 樣式框架：[Bootstrap](https://getbootstrap.com/)

## 開發者 (Contributor)
[Wang yin](https://github.com/wang-yin)
