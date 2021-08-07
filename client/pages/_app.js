import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';
import Header from '../components/header';

const AppComponent = ({ Component, pageProps, currentUser }) => {
    console.log("xxxxxxxxxxxxxxxxxxxx222222222222222");
    return (
        <div>
            <Header currentUser={currentUser}></Header>
            <div className="container">
                <Component currentUser={currentUser} {...pageProps}></Component>
            </div>
        </div>
    )
}

AppComponent.getInitialProps = async (appContext) => {
    console.log("xxxxxxxxxxxxxxxxxxxx11111111111", appContext);
    const client = buildClient(appContext.ctx);
    try {
        const { data } = await client.get('/api/users/currentuser');
    } catch (error) {
        console.log("xxxxxxxxxxxxxxxxxxxx2525252552525", error);
    }


    let pageProps = {};
    if (appContext.Component.getInitialProps) {
        pageProps = await appContext.Component.getInitialProps(appContext.ctx, client, data.currentUser);
    }

    return {
        pageProps,
        ...data
    }
}

export default AppComponent;