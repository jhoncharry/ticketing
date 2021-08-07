import axios from "axios";

export default ({ req }) => {
    console.log("xxxxxxxxxxxxxxxxxxxx33333333333333333");
    if (typeof window === 'undefined') {
        // we are on the server!
        // requests should be made to http://ingress-nginx-controller.ingress-nginx.svc.cluster.local
        return axios.create({
            baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
            headers: req.headers
        });
    } else {
        console.log("xxxxxxxxxxxxxxxxxxxx44444444444444444");
        // we must be on the browser!
        // requests can be made with a base url of ''
        return axios.create({
            baseURL: '/'
        });
    }
}