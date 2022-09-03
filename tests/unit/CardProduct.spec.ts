import { mount } from "@vue/test-utils";
import CardProduct from "@/components/CardProduct.vue";

/**Suite de test para componente CardProduct.vue */
describe('Puebas de funcionamiento de CardProduct', ()  =>  {
    it('Renderizar etiqueta <p/> con description',  ()  =>  {
        const wrapper   =   mount(CardProduct)
        console.log(wrapper.html);
        expect(wrapper.html()).toContain("<p");
    })
})

/**
 * description: {
            type: String,
            default: ''
        },
        promocion: {
            type: Boolean,
            default: false
        },
        product:  {
            type: String,
            default:''
        },
        price: {
            type:Number,
            default:0
        },
        _id:{
            type:Number,
            default:0
        }
 */