function daysFromToday(days: number): string {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

export const matters = [
  {
    id: "MAT-1001",
    title: "Purchase of 22 Riverview Terrace, Preston",
    matterType: "Conveyancing",
    dates: {
      opened: daysFromToday(-42),
      lastActivity: daysFromToday(-1),
      settlement: daysFromToday(5),
    },
    documents: [
      { fileName: "Contract of Sale - 22 Riverview Terrace.pdf", date: daysFromToday(-40) },
      { fileName: "Title Search - Vol 10234 Fol 881.pdf", date: daysFromToday(-38) },
      { fileName: "Building Inspection Report.pdf", date: daysFromToday(-30) },
      { fileName: "Finance Approval - First State Bank.pdf", date: daysFromToday(-8) },
    ],
    fileNotes: [
      { date: daysFromToday(-40), text: "Contract received. 10% deposit paid into trust." },
      { date: daysFromToday(-8), text: "Unconditional finance approval on file. PEXA workspace invited." },
      { date: daysFromToday(-1), text: "Settlement booked. Balance figure still to be confirmed with incoming mortgagee." },
    ],
  },
  {
    id: "MAT-1002",
    title: "Sale of 8 Harbour Lane, Williamstown",
    matterType: "Conveyancing",
    dates: {
      opened: daysFromToday(-28),
      lastActivity: daysFromToday(-3),
      settlement: daysFromToday(24),
    },
    documents: [
      { fileName: "Authority to Act.pdf", date: daysFromToday(-28) },
      { fileName: "Client Identification - Vendor.pdf", date: daysFromToday(-27) },
    ],
    fileNotes: [
      { date: daysFromToday(-28), text: "Sale instructions taken. Agent is Harbour & Co." },
      { date: daysFromToday(-12), text: "Chased vendor for rates, planning and owners corporation certificates." },
      { date: daysFromToday(-3), text: "Section 32 vendor statement still not on file. Cannot issue a contract for exchange." },
    ],
  },
  {
    id: "MAT-1003",
    title: "Patel & Patel — property settlement",
    matterType: "Family",
    dates: {
      opened: daysFromToday(-176),
      lastActivity: daysFromToday(-74),
      hearing: daysFromToday(41),
    },
    documents: [
      { fileName: "Initiating Application.pdf", date: daysFromToday(-170) },
      { fileName: "Financial Statement - Applicant.pdf", date: daysFromToday(-162) },
      { fileName: "Superannuation Information Form.pdf", date: daysFromToday(-140) },
    ],
    fileNotes: [
      { date: daysFromToday(-170), text: "Application filed. Other side represented by Northbridge Family Law." },
      { date: daysFromToday(-110), text: "Partial disclosure received. Still waiting on company financials." },
      { date: daysFromToday(-74), text: "No reply to last letter. Matter has gone quiet pending the other side's material." },
    ],
  },
  {
    id: "MAT-1004",
    title: "Nguyen v Metro Builders Pty Ltd",
    matterType: "Litigation",
    dates: {
      opened: daysFromToday(-118),
      lastActivity: daysFromToday(-4),
      hearing: daysFromToday(19),
    },
    documents: [
      { fileName: "Statement of Claim.pdf", date: daysFromToday(-96) },
      { fileName: "Defence.pdf", date: daysFromToday(-68) },
      { fileName: "Reply.pdf", date: daysFromToday(-54) },
    ],
    fileNotes: [
      { date: daysFromToday(-96), text: "Claim filed in the County Court. Defective waterproofing and delay damages." },
      { date: daysFromToday(-54), text: "Reply served. Discovery timetable agreed." },
      { date: daysFromToday(-4), text: "Client unhappy with the pace of the matter and queried costs to date. Call booked to go through the estimate." },
    ],
  },
  {
    id: "MAT-1005",
    title: "Estate of Margaret Hale",
    matterType: "Wills & Estates",
    dates: {
      opened: daysFromToday(-61),
      lastActivity: daysFromToday(-6),
    },
    documents: [
      { fileName: "Last Will and Testament - 14 March 2019.pdf", date: daysFromToday(-61) },
      { fileName: "Death Certificate.pdf", date: daysFromToday(-55) },
      { fileName: "Inventory of Assets.pdf", date: daysFromToday(-20) },
    ],
    fileNotes: [
      { date: daysFromToday(-61), text: "Executor James Hale attended. Original will held in safe custody." },
      { date: daysFromToday(-20), text: "Asset inventory drafted. Two bank accounts and the family home at Essendon." },
      { date: daysFromToday(-6), text: "Probate application lodged. Awaiting grant." },
    ],
  },
  {
    id: "MAT-1006",
    title: "Purchase of Lot 14 Aurora Estate, Craigieburn",
    matterType: "Conveyancing",
    dates: {
      opened: daysFromToday(-198),
      lastActivity: daysFromToday(-83),
      settlement: daysFromToday(96),
    },
    documents: [
      { fileName: "Off the Plan Contract of Sale.pdf", date: daysFromToday(-196) },
      { fileName: "Deposit Bond - Lot 14.pdf", date: daysFromToday(-190) },
    ],
    fileNotes: [
      { date: daysFromToday(-196), text: "Off-the-plan purchase. Sunset date still some months away." },
      { date: daysFromToday(-130), text: "Developer advised framing complete. No occupancy certificate yet." },
      { date: daysFromToday(-83), text: "No update from the developer this quarter. File idle pending construction progress." },
    ],
  },
  {
    id: "MAT-1007",
    title: "Okonkwo — parenting",
    matterType: "Family",
    dates: {
      opened: daysFromToday(-88),
      lastActivity: daysFromToday(-2),
      hearing: daysFromToday(14),
    },
    documents: [
      { fileName: "Initiating Application - Parenting.pdf", date: daysFromToday(-86) },
      { fileName: "Affidavit of Applicant.pdf", date: daysFromToday(-86) },
      { fileName: "s60I Certificate.pdf", date: daysFromToday(-90) },
    ],
    fileNotes: [
      { date: daysFromToday(-86), text: "Parenting application filed. Interim week-about arrangement in place by consent." },
      { date: daysFromToday(-21), text: "Family report interviews scheduled." },
      { date: daysFromToday(-2), text: "Hearing bundle sent to counsel. Client confirmed attendance." },
    ],
  },
  {
    id: "MAT-1008",
    title: "Brooks v Hale Trading Pty Ltd",
    matterType: "Litigation",
    dates: {
      opened: daysFromToday(-37),
      lastActivity: daysFromToday(-1),
      hearing: daysFromToday(3),
    },
    documents: [
      { fileName: "Letter of Demand.pdf", date: daysFromToday(-36) },
      { fileName: "Writ and Statement of Claim.pdf", date: daysFromToday(-18) },
    ],
    fileNotes: [
      { date: daysFromToday(-36), text: "Demand for $84,600 unpaid invoices. Seven days to pay, no response." },
      { date: daysFromToday(-18), text: "Proceedings issued. Process server instructed." },
      { date: daysFromToday(-1), text: "Directions hearing in three days. Affidavit of service still not received." },
    ],
  },
  {
    id: "MAT-1009",
    title: "Rossi — will and enduring powers",
    matterType: "Wills & Estates",
    dates: {
      opened: daysFromToday(-16),
      lastActivity: daysFromToday(-7),
    },
    documents: [
      { fileName: "Existing Will - 2014.pdf", date: daysFromToday(-16) },
      { fileName: "File Note of Instructions.pdf", date: daysFromToday(-16) },
    ],
    fileNotes: [
      { date: daysFromToday(-16), text: "New will and EPAs instructed. Two adult children as executors." },
      { date: daysFromToday(-7), text: "Draft will and enduring powers sent. Waiting on client comments." },
    ],
  },
  {
    id: "MAT-1010",
    title: "Purchase of 3 Acacia Court, Bendigo",
    matterType: "Conveyancing",
    dates: {
      opened: daysFromToday(-51),
      lastActivity: daysFromToday(-2),
      settlement: daysFromToday(18),
    },
    documents: [
      { fileName: "Contract of Sale - 3 Acacia Court.pdf", date: daysFromToday(-50) },
      { fileName: "Section 32 Vendor Statement.pdf", date: daysFromToday(-50) },
      { fileName: "Title Search - Vol 8871 Fol 12.pdf", date: daysFromToday(-48) },
    ],
    fileNotes: [
      { date: daysFromToday(-50), text: "Private sale. Weatherboard, circa 1950. Finance due in a fortnight from exchange." },
      { date: daysFromToday(-22), text: "Finance approved subject to valuation." },
      { date: daysFromToday(-2), text: "No building or pest report on file. Special condition required both before the inspection date, which has passed." },
    ],
  },
];
