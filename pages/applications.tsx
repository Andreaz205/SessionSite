import ApplicationsPage from "@/src/pages/applications/applications";
import {GetServerSideProps} from "next";
import {getApplicationsRequest, IStoreApplicationRequest} from "@/src/shared/api/requests";

export interface IApplicationsProps {
    applications: {
        [key: string]: IStoreApplicationRequest
    }
}

const Applications = (props: IApplicationsProps) => {
    return (
        <ApplicationsPage applications={props.applications}/>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const applications: IStoreApplicationRequest[] = await getApplicationsRequest()
        return {
            props: {
                applications: applications
            },
        }
    } catch (e) {
        return {
            notFound: true
        }
    }
}

export default Applications