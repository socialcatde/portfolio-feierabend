import MyComponent from '../../../../slices/BilderHochladen';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/BilderHochladen'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"bild":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85"}}],"primary":{},"slice_type":"image_uploader","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
