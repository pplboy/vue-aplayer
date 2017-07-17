import Vue from 'vue'
import Component from 'vue-class-component'
import WithRender from './Info.html?style=./Info.scss'

import { Prop } from 'vue-property-decorator'

@WithRender
@Component
export class Info extends Vue {
  @Prop({ type: String, required: true })
  private title: String
  @Prop({ type: String, required: true })
  private author: String
}

export default Info