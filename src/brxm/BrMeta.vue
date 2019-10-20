<script lang="ts">
import { Meta, META_POSITION_BEGIN, META_POSITION_END, isMetaComment } from '@bloomreach/spa-sdk';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component({ name: 'br-meta' })
export default class BrMeta extends Vue {
  @Prop() meta!: Meta[];

  private comments: Comment[] = [];

  mounted() {
    this.renderComments();
  }

  beforeUpdate() {
    this.removeComments();
  }

  updated() {
    this.updateComments();
  }

  beforeDestroy() {
    this.removeComments();
  }

  @Watch('meta')
  private updateComments() {
    this.removeComments();
    this.renderComments();
  }

  private removeComments() {
    this.comments.splice(0).forEach(comment => comment && comment.remove());
  }

  private renderComments() {
    if (!this.$vnode.elm) {
      return;
    }

    this.comments = [
      ...this.meta
        .filter(isMetaComment)
        .filter(meta => meta.getPosition() === META_POSITION_BEGIN)
        .map(meta => new Comment(meta.getData()))
        .map((comment) => {
          this.$vnode.elm!.parentNode!.insertBefore(comment, this.$vnode.elm!);

          // insertNode returns undefined in some cases with the fragment component
          return comment;
        }),

      ...this.meta
        .filter(isMetaComment)
        .filter(meta => meta.getPosition() === META_POSITION_END)
        .reverse()
        .map(meta => new Comment(meta.getData()))
        .map((comment) => {
          if (this.$vnode.elm!.nextSibling) {
          this.$vnode.elm!.parentNode!.insertBefore(comment, this.$vnode.elm!.nextSibling);
          } else {
          this.$vnode.elm!.parentNode!.appendChild(comment);
          }

          // insertNode returns undefined in some cases with the fragment component
          return comment;
        }),
    ];
  }

  render(createElement: Vue.CreateElement) {
    return this.$slots.default && this.$slots.default!.length === 1
      ? this.$slots.default![0]
      : createElement('fragment', this.$slots.default);
  }
}
</script>
