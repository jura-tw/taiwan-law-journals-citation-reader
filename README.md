# Law Journals Citation Style Guide Reader 法學期刊引註格式凡例：線上查閱

## Introduction to the Project 專案簡介

This project presents the citation style jointly developed by four TSSCI tier 1 journals in the field of law in Taiwan: _Unified Format for TSSCI Tier-1 Journals in the Discipline of Law, Department of Humanities and Social Sciences, National Science and Technology Council: Law Journals Citation Style Guide (Last revised: 18 May 2026)_ (this title is a non-official translation), allowing users to easily browse the webpage on various platforms without having to consult the PDF.

本專案以網頁呈現臺灣四本法律學門 TSSCI 一級期刊共同制定的引註格式〈國科會人文處法律學門 TSSCI 一級期刊統一格式：法學期刊引註格式凡例（最後修訂時間：2026 年 05 月 18 日）〉，讓使用者不需要查閱 PDF，可以方便地在各種載具上瀏覽網頁。

Please click on <[Law Journals Citation Style Guide](https://cite.jura.tw/)> to view. The homepage of this website provides a brief introduction to this project, while the search page offers filtering options by language and reference type.

請點選〈[法學期刊引註格式凡例](https://cite.jura.tw/)〉來查看。這個網站首頁簡要介紹本專案，查詢頁面則提供依語言、依參考文獻類型來顯示的篩選功能。

> This project is not provided by the NSTC or the TSSCI Tier-1 law journals. It only compiles their announced citation formats to establish a non-official search platform for easy reference. In case of any doubt, please refer to the official announcement documents.
> 
> Currently, [the documents jointly announced](https://drive.google.com/drive/u/0/folders/15uWIodb8D7JFNnkctlm2OcJ4TWUha6dv) by those journals are only provided by Prof. Dr. Naiyi Sun, convener of the Discipline of Law in NSTC, in her personal Facebook comment section. 

> 本專案不是由國科會或法律學門各 TSSCI 一級期刊提供，只整理其公告的引註格式，建立非官方檢索平台，方便參考。如有疑義，請以官方公告文件為準。
> 
> 目前，各 TSSCI 一級期刊協同公告之文件，只由法律學門召集人孫迺翊教授在其個人 FB 留言區提供，請點[統一公告文件](https://drive.google.com/drive/u/0/folders/15uWIodb8D7JFNnkctlm2OcJ4TWUha6dv)查看。

## For developers 技術說明

### Tech Stack

| 層次     | 技術            |
| -------- | --------------- |
| 框架     | Nuxt            |
| 內容管理 | Nuxt Content V3 |
| UI       | Pico CSS        |
| 套件管理 | PNPM            |

### 目錄結構

```
taiwan-law-journals-citation-reader/
├── app/
│   ├── assets/
│   │   └── css/
│   │       └── main.css             # 全域自訂樣式（dark mode token override 等）
│   ├── components/
│   │   ├── AppHeader.vue            # 全站頁首（含非官方聲明 banner）
│   │   ├── AppFooter.vue            # 全站頁尾（含非官方聲明）
│   │   ├── ThemeToggle.vue          # 亮暗色模式切換按鈕
│   │   └── CitationCard.vue         # 單一引註格式卡片
│   ├── composables/
│   │   └── useTheme.ts              # 主題切換邏輯（含 localStorage 持久化）
│   ├── layouts/
│   │   └── default.vue              # 預設 layout（包含 AppHeader + AppFooter）
│   └── pages/
│       ├── index.vue                # 首頁
│       └── citations/
│           └── index.vue            # 引註格式總覽（可依分類、依語言，在使用者端篩選）
├── content/
│   └── citation-style.json
├── content.config.ts                # Nuxt Content V3 Collection 定義
├── nuxt.config.ts
├── tsconfig.json
├── package.json
└── README.md
```
