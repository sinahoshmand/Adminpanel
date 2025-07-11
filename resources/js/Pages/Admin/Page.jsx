import Layout from "@/layout/Layout.jsx";
import Card from "@/components/ui/Card.jsx";
import {usePage} from "@inertiajs/react";

export default function Page() {
    return (
        <>
          <Layout>
              <Card title="Starter Kit"><p>{ usePage().props.text }</p></Card>
          </Layout>
        </>
    )
}
