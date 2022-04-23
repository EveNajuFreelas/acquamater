import "./products-services.css";
import ColumnTextImage from "../../components/ColumnTextImage";
import { ContainerProducts } from "./styles";
import people_circle from "../../utils/images/people_circle.png";

const ProductsServices = () => {
   return (
      <ContainerProducts>
         <ColumnTextImage
            image={people_circle}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et auctor lorem, convallis venenatis arcu. Curabitur rutrum iaculis ex, quis gravida felis accumsan id. Phasellus at commodo tellus. "
            title="Phasellus nec rutrum"
            button
         />
         <ColumnTextImage
            image={people_circle}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et auctor lorem, convallis venenatis arcu. Curabitur rutrum iaculis ex, quis gravida felis accumsan id. Phasellus at commodo tellus. "
            title="Phasellus nec rutrum"
            reverse
         />
         <ColumnTextImage
            image={people_circle}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et auctor lorem, convallis venenatis arcu. Curabitur rutrum iaculis ex, quis gravida felis accumsan id. Phasellus at commodo tellus. "
         />
      </ContainerProducts>
   );
};

export default ProductsServices;
