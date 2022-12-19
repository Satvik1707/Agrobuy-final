import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Footer from "./components/footer";
import Header from "./components/Header";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductDetails from "./screens/ProductDetails";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import AdminScreen from "./screens/AdminScreen";
import BreederScreen from "./screens/BreederScreen";
import TransporterScreen from "./screens/TransporterScreen";
import FCIScreen from "./screens/FCIScreen";
import FirstScreen from "./screens/FirstScreen";

function App() {
  return (
    <Router>
      <Header />
      <div className="my-3">
        <Container>
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/admin" component={AdminScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/breeder" component={BreederScreen} />
          <Route path="/transport" component={TransporterScreen} />
          <Route path="/fci" component={FCIScreen} />
          <Route path="/farmer" component={HomeScreen} />
          <Route path="/" component={FirstScreen} exact />
        </Container>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
