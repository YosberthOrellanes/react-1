import Header from "./assets/componentes/Header";
import MyCard from "./assets/componentes/MyCard";
import Footer from "./assets/componentes/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tags from "./assets/componentes/Tags";
import Boton from "./assets/componentes/Boton";



function App() {
  return (
    
    <div className="container">
      <Header titulo={'Adopta un perrito'}/>
<section className="cards">
<Tags
url="https://images.pexels.com/photos/4679182/pexels-photo-4679182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
nombre="Kayser"
colorButton="success"
textButton="Adoptar"
descripcion="Es juguetón,amigable y se lleva bien con los niños y otros animales.¡Haz de Kayser parte de tu familiaa hoy mismo!" />

<Tags
url="https://images.pexels.com/photos/3299908/pexels-photo-3299908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
nombre="Bobby"
colorButton="primary"
textButton="Adoptar"
descripcion="Lleno de energía y listo para jugar.Dale a Bobby el hogar amoroso que se merece" />

<Tags
url="https://images.pexels.com/photos/8497489/pexels-photo-8497489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
nombre="Issy"
colorButton="danger"
textButton="Adoptar"
descripcion="Una perra de tamaño mediano con un corazón gigante.Hazte amigo de Issy y experimenta un amor incondicional"/>


<Tags
url="https://images.pexels.com/photos/18964465/pexels-photo-18964465/free-photo-of-animal-mascota-mono-hierba.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
nombre="Leah Lupita"
colorButton="warning"
textButton="Adoptar"
descripcion="Es una compañera leal y cariñosa que adora los mimos y abrazos. ¡Ayuda a Leah Lupita a encontrar su final feliz" />
      </section>
      <Footer/> 

      </div>

);
}


export default App
