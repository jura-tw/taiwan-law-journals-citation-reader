<template>
  <div>
    <h1>法學期刊引註格式凡例：線上查閱</h1>

    <p>
      本專案以網頁呈現臺灣四本法律學門 TSSCI 一級期刊共同制定的引註格式〈國科會人文處法律學門 TSSCI 一級期刊統一格式：法學期刊引註格式凡例（最後修訂時間：2026 年 05 月 18 日）〉，讓使用者不需要查閱 PDF，可以方便地在各種載具上瀏覽網頁。
    </p>
    <p>
      資料涵蓋通則及中文、英文、德文、日文及法文等五種語言引註格式，但原文件的致謝部分未包含在內。
    </p>
    <p>
      本網站的資料是從法律學門召集人孫迺翊教授 FB 留言中 Google Drive
      連結（2026 年 5 月 18 日修訂版本）下載，再由個人整理為結構化資料、設定格式，不是官方提供的查詢介面，僅供參考。如有疑義，請以官方公告文件為準。
    </p>

    <h2>瀏覽引註格式</h2>
    <nav>
      <ul>
        <li v-for="cat in categories" :key="cat.code">
          <a :href="`/citations#${anchorId(cat.code)}`" v-if="cat.code != '1.'">
            {{ cat.name }}
          </a>
        </li>
      </ul>
    </nav>

    <p>
      <a href="/citations">引註格式總覽 →</a>
    </p>
  </div>
</template>

<script setup lang="ts">
import citationData from '~~/content/citation-style.json'
import type { CitationRule } from '~/types/citation'

const categories = citationData.rule as CitationRule[]

function anchorId(code: string): string {
  return code.replace(/\.$/, '').replace(/\./g, '-')
}
</script>
