import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route } from "react-router-dom";

const Home = lazy(() => import("./components/Home"))
const About = lazy(() => import("./components/About"))
const App = lazy(() => import("./App"))

class Routes extends React.Component {
    render() {
        return <Suspense fallback={<div>Component Loading</div>}>
            <BrowserRouter>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/app" component={App} />
            </BrowserRouter>
        </Suspense>
    }
}

export default Routes;