import MyComponent from '../../../../slices/Projektkategorien';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Projektkategorien'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"zugehorigeprojektkategorie":{"id":"mock_document_id","link_type":"Document","type":"projektkategorie","tags":[],"lang":"en-us","slug":null,"first_publication_date":"1970-01-01T00:00:01+0000","last_publication_date":"1970-01-01T01:00:00+0000"}}],"primary":{},"slice_type":"werkkategorie","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
