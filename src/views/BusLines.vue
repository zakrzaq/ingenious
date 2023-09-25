<script setup lang="ts">
import LineSelector from "@/components/Line/LineSelector.vue";
import ResultsLine from "@/components/Line/ResultsLine.vue";
import ResultsStop from "@/components/Line/ResultsStop.vue";
</script>

<template>
  <div>
    <LineSelector />
    <div class="row gx-0 mt-3 d-flex gap-3">
        <ResultsLine class="col gx-0 w-50" />
        <ResultsStop class="col gx-0 w-50" />
    </div>
  </div>
</template>
