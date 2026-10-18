import SalesProposalClient from "./sales-proposal-client";

export const metadata = {
  title: "Sales Site Survey & Proposal | myEVStation",
  description: "Internal sales workflow for preparing EV charging site proposals.",
  robots: { index: false, follow: false },
};

export default function SalesProposalPage() {
  return <SalesProposalClient />;
}
