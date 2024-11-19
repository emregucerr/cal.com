"use client";

import { getServerSideProps } from "@lib/insights/getServerSideProps";

import PageWrapper from "@components/PageWrapper";

import InsightsPage from "~/insights/insights-virtual-queues-view";

const Page = () => <InsightsPage />;
Page.PageWrapper = PageWrapper;
export default Page;
export { getServerSideProps };