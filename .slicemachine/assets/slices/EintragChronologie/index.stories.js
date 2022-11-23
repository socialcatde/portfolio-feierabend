import MyComponent from '../../../../slices/EintragChronologie';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/EintragChronologie'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"titel":[{"type":"paragraph","text":"Pariatur enim nisi ad quis laboris officia. Laboris laboris cupidatat mollit veniam aliqua.","spans":[]}],"beschreibung":[{"type":"paragraph","text":"Ad dolore duis dolor laboris ex nisi enim non.","spans":[]}],"entsehungszeitpunkt":"2012-01-11","projektlink":{"link_type":"Web","url":"http://twitter.com"}}],"primary":{},"slice_type":"eintrag_chronologie","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
