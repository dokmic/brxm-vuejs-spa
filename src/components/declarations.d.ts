interface DocumentModels {
  document: import('@bloomreach/spa-sdk').Reference;
}

interface DocumentData {
  author: string;
  content: DocumentContent;
  date: number;
  image: import('@bloomreach/spa-sdk').Reference;
  introduction: string;
  title: string;

  [property: string]: any;
}

interface DocumentContent {
  value: string;
}

interface MenuModels {
  menu: import('@bloomreach/spa-sdk').Menu;
}

interface PageableModels {
  pageable: Pageable;
}

interface Pageable {
  currentPage: number;
  currentRange: number[];
  endOffset: number;
  endPage: number;
  items: import('@bloomreach/spa-sdk').Reference[];
  maxSize: number;
  next: boolean;
  nextBatch: boolean;
  nextPage: number | null;
  pageNumbersArray: number[];
  pageSize: number;
  previous: boolean;
  previousPage: number | null;
  showPagination: boolean;
  startOffset: number;
  startPage: number;
  total: number;
  totalPages: number;
  visiblePages: number;
}
