import PageAlertComponent from "./PageAlertComponent";
import { ApplicationLayout } from "./layouts/application-layout";

export default function Home() {
    return (
        <ApplicationLayout>
            <h1 className="text-2xl text-black dark:text-white">Hello</h1>

            <PageAlertComponent />
        </ApplicationLayout>
    );
}
