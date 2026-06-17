# Howard 接案個人網站

一個單頁的接案形象網站。純靜態（HTML / CSS / JS），沒有任何 build 步驟，可以直接放上 **Cloudflare Pages**。

服務內容：LINE 機器人開發串接、電商網站開發設計、客製小系統。
包含：頭像、服務介紹、作品集、合作流程、常見問題、聯絡方式（LINE / Email / GitHub / 表單），以及捲動進場、卡片浮起、FAQ 手風琴等動態效果。

---

## 檔案結構

```
Blog/
├── index.html          # 主頁面（全部內容都在這）
├── css/style.css       # 樣式與動態效果
├── js/main.js          # 互動：選單、捲動動畫、FAQ、表單寄信
├── images/avatar.svg   # 頭像（佔位圖，建議換成你的真實照片）
├── _headers            # Cloudflare 快取與安全標頭
└── README.md           # 這份說明
```

---

## 在本機預覽

不需要安裝任何套件。最簡單的方式：**直接用瀏覽器打開 `index.html`**。

如果想用本機伺服器（比較貼近正式環境），在 `Blog` 資料夾裡執行：

```powershell
python -m http.server 8080
```

然後打開瀏覽器到 `http://localhost:8080`。

---

## 部署到 Cloudflare Pages（超新手版）

### 方法 A：直接拖拉上傳（最快，不用 Git）

1. 登入 [Cloudflare Dashboard](https://dash.cloudflare.com/)。
2. 左側選 **Workers & Pages** → **Create** → **Pages** → **Upload assets**（上傳資產）。
3. 取一個專案名稱，例如 `howard-dev`。
4. 把整個 `Blog` 資料夾裡的**內容**（注意是裡面的檔案，不是 Blog 這層資料夾）拖進上傳區。
5. 按 **Deploy**。幾秒後就會給你一個網址，例如 `https://howard-dev.pages.dev`。

> 之後改了東西，回到同一個專案再上傳一次即可，或改用方法 B 讓它自動更新。

### 方法 B：連 GitHub 自動部署（推薦長期用）

1. 先把這個資料夾推上一個 GitHub repo。
2. Cloudflare → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**，選你的 repo。
3. 建置設定全部留空白：
   - **Framework preset**：`None`
   - **Build command**：留空
   - **Build output directory**：`/`（根目錄）
4. 按 **Save and Deploy**。以後 `git push` 就會自動更新網站。

### 綁自己的網域（可選）

部署完成後，在該 Pages 專案的 **Custom domains** 加上你的網域，照指示設定 DNS 即可。

---

## 個人資料（已填好）

聯絡方式、作品連結、頭像都已經填入真實資料：

- **LINE**：`https://line.me/ti/p/4chU6Pb1iJ`
- **Email**：`howardtseng0828@gmail.com`
- **GitHub**：`https://github.com/howardtseng0828`
- **頭像**：`images/avatar.jpg`（你的真實照片）
- **作品連結**：VocaLearn、上巧工程行、CWY Worship、CoupleWidget 卡片可點擊前往

> **聯絡表單目前是用 `mailto`**：訪客按送出會開啟他自己的信箱、把內容寄給你。
> 如果想做成「直接收到通知、不開信箱」，可以接 [Formspree](https://formspree.io/) 之類的免費服務——
> 註冊後把表單網址（像 `https://formspree.io/f/xxxx`）給我，我幫你接上。
>
> **作品集圖片**目前是 emoji 漸層色塊（純 CSS）。之後你提供截圖，放進 `images/` 再換上即可。
