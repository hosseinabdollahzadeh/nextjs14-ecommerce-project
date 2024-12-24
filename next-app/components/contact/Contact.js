import FormContact from "@/components/contact/Form";
import dynamic from "next/dynamic";

export default function Contact(){
    const Map = dynamic(
        () => import("@/components/contact/Map"),
        { ssr: false }
    )
    return (
        <section className="book_section layout_padding">
            <div className="container">
                <div className="heading_container">
                    <h2>
                        تماس با ما
                    </h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <FormContact />
                    </div>
                    <div className="col-md-6">
                        <div className="map_container ">
                            <Map />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}