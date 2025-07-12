import Layout from "@/layout/Layout.jsx";
import {Head} from "@inertiajs/react";
import Card from "@/components/ui/Card.jsx";

const SubPage = ()=>{
    return(
      <>
          <Layout>
              <Head>
                  <title>دشبورد | ژیر صفخه </title>
                  <meta name="description" content="Your page description" />
              </Head>

              <Card title="Starter Kit"><p>this is sub page</p></Card>
          </Layout>
      </>
    );
}

export default SubPage;
