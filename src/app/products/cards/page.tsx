import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/hero";

const page = () => {
  const deposit = [
    {
      title: "VISA Classic Debit Card",
      photo: "/icon-and-logos/products/deposit-one.png",
      list: [
        "Contact and contactless functionality",
        "Maximum Daily Cash Withdrawal: up to Birr 10,000",
        "Maximum Daily Fund Transfer: up to Birr 200,000",
        "Maximum Daily Payment/Purchase: up to Birr 500,000",
        "Maximum Daily Cash Advance at Branches: up to Birr 50,000",
        "Card Expiry: 5 years",
      ],
      link: "",
      eligibilityHeader: "",
      eligibilityList: ["", ""],
    },
    {
      title: "White Label Card",
      photo: "/icon-and-logos/products/deposit-one.png",
      list: [
        "It is a contact card",
        "Maximum Daily cash withdrawal - Birr 10,000",
        "Maximum Daily Fund Transfer - Birr 200,000",
        "Maximum daily payment/purchase - Birr 500,000",
        "Maximum daily cash advance (cash withdrawal) at Branches - up to Birr 50,000.00",
        "Expiry Date - Five Years",
      ],
      link: "",
      eligibilityHeader: "CBE account holders:",
      eligibilityList: [
        "Individual saving account",
        "Individual current account",
        "Youth account",
      ],
    },
    {
      title: "VISA Classic Women Debit Cards",
      photo: "/icon-and-logos/products/deposit-one.png",
      list: [
        "Contact/contactless cards",
        "Maximum Daily cash withdrawal - Birr 10,000",
        "Maximum Daily Fund Transfer - Birr 200,000",
        "Maximum daily payment/purchase - Birr 500,000",
        "Maximum daily cash advance (cash withdrawal) at Branches - up to Birr 50,000.00",
        "Expiry Date - Five Years",
      ],
      link: "",
      eligibilityHeader: "CBE account holders:",
      eligibilityList: ["Women’s Saving Account holders"],
    },
    {
      title: "VISA Classic Debit Card",
      photo: "/icon-and-logos/products/deposit-one.png",
      list: [
        "Contact and contactless functionality",
        "Maximum Daily Cash Withdrawal: up to Birr 10,000",
        "Maximum Daily Fund Transfer: up to Birr 200,000",
        "Maximum Daily Payment/Purchase: up to Birr 500,000",
        "Maximum Daily Cash Advance at Branches: up to Birr 50,000",
        "Card Expiry: 5 years",
      ],
      link: "",
      eligibilityHeader: "",
      eligibilityList: ["", ""],
    },
    {
      title: "White Label Card",
      photo: "/icon-and-logos/products/deposit-one.png",
      list: [
        "It is a contact card",
        "Maximum Daily cash withdrawal - Birr 10,000",
        "Maximum Daily Fund Transfer - Birr 200,000",
        "Maximum daily payment/purchase - Birr 500,000",
        "Maximum daily cash advance (cash withdrawal) at Branches - up to Birr 50,000.00",
        "Expiry Date - Five Years",
      ],
      link: "",
      eligibilityHeader: "CBE account holders:",
      eligibilityList: [
        "Individual saving account",
        "Individual current account",
        "Youth account",
      ],
    },
    {
      title: "VISA Classic Women Debit Cards",
      photo: "/icon-and-logos/products/deposit-one.png",
      list: [
        "Contact/contactless cards",
        "Maximum Daily cash withdrawal - Birr 10,000",
        "Maximum Daily Fund Transfer - Birr 200,000",
        "Maximum daily payment/purchase - Birr 500,000",
        "Maximum daily cash advance (cash withdrawal) at Branches - up to Birr 50,000.00",
        "Expiry Date - Five Years",
      ],
      link: "",
      eligibilityHeader: "CBE account holders:",
      eligibilityList: ["Women’s Saving Account holders"],
    },
    {
      title: "VISA Classic Debit Card",
      photo: "/icon-and-logos/products/deposit-one.png",
      list: [
        "Contact and contactless functionality",
        "Maximum Daily Cash Withdrawal: up to Birr 10,000",
        "Maximum Daily Fund Transfer: up to Birr 200,000",
        "Maximum Daily Payment/Purchase: up to Birr 500,000",
        "Maximum Daily Cash Advance at Branches: up to Birr 50,000",
        "Card Expiry: 5 years",
      ],
      link: "",
      eligibilityHeader: "",
      eligibilityList: ["", ""],
    },
    {
      title: "White Label Card",
      photo: "/icon-and-logos/products/deposit-one.png",
      list: [
        "It is a contact card",
        "Maximum Daily cash withdrawal - Birr 10,000",
        "Maximum Daily Fund Transfer - Birr 200,000",
        "Maximum daily payment/purchase - Birr 500,000",
        "Maximum daily cash advance (cash withdrawal) at Branches - up to Birr 50,000.00",
        "Expiry Date - Five Years",
      ],
      link: "",
      eligibilityHeader: "CBE account holders:",
      eligibilityList: [
        "Individual saving account",
        "Individual current account",
        "Youth account",
      ],
    },
    {
      title: "VISA Classic Women Debit Cards",
      photo: "/icon-and-logos/products/deposit-one.png",
      list: [
        "Contact/contactless cards",
        "Maximum Daily cash withdrawal - Birr 10,000",
        "Maximum Daily Fund Transfer - Birr 200,000",
        "Maximum daily payment/purchase - Birr 500,000",
        "Maximum daily cash advance (cash withdrawal) at Branches - up to Birr 50,000.00",
        "Expiry Date - Five Years",
      ],
      link: "",
      eligibilityHeader: "CBE account holders:",
      eligibilityList: ["Women’s Saving Account holders"],
    },
    {
      title: "VISA Classic Debit Card",
      photo: "/icon-and-logos/products/deposit-one.png",
      list: [
        "Contact and contactless functionality",
        "Maximum Daily Cash Withdrawal: up to Birr 10,000",
        "Maximum Daily Fund Transfer: up to Birr 200,000",
        "Maximum Daily Payment/Purchase: up to Birr 500,000",
        "Maximum Daily Cash Advance at Branches: up to Birr 50,000",
        "Card Expiry: 5 years",
      ],
      link: "",
      eligibilityHeader: "",
      eligibilityList: ["", ""],
    },
    {
      title: "White Label Card",
      photo: "/icon-and-logos/products/deposit-one.png",
      list: [
        "It is a contact card",
        "Maximum Daily cash withdrawal - Birr 10,000",
        "Maximum Daily Fund Transfer - Birr 200,000",
        "Maximum daily payment/purchase - Birr 500,000",
        "Maximum daily cash advance (cash withdrawal) at Branches - up to Birr 50,000.00",
        "Expiry Date - Five Years",
      ],
      link: "",
      eligibilityHeader: "CBE account holders:",
      eligibilityList: [
        "Individual saving account",
        "Individual current account",
        "Youth account",
      ],
    },
    {
      title: "VISA Classic Women Debit Cards",
      photo: "/icon-and-logos/products/deposit-one.png",
      list: [
        "Contact/contactless cards",
        "Maximum Daily cash withdrawal - Birr 10,000",
        "Maximum Daily Fund Transfer - Birr 200,000",
        "Maximum daily payment/purchase - Birr 500,000",
        "Maximum daily cash advance (cash withdrawal) at Branches - up to Birr 50,000.00",
        "Expiry Date - Five Years",
      ],
      link: "",
      eligibilityHeader: "CBE account holders:",
      eligibilityList: ["Women’s Saving Account holders"],
    },
    {
      title: "VISA Classic Debit Card",
      photo: "/icon-and-logos/products/deposit-one.png",
      list: [
        "Contact and contactless functionality",
        "Maximum Daily Cash Withdrawal: up to Birr 10,000",
        "Maximum Daily Fund Transfer: up to Birr 200,000",
        "Maximum Daily Payment/Purchase: up to Birr 500,000",
        "Maximum Daily Cash Advance at Branches: up to Birr 50,000",
        "Card Expiry: 5 years",
      ],
      link: "",
      eligibilityHeader: "",
      eligibilityList: ["", ""],
    },
    {
      title: "White Label Card",
      photo: "/icon-and-logos/products/deposit-one.png",
      list: [
        "It is a contact card",
        "Maximum Daily cash withdrawal - Birr 10,000",
        "Maximum Daily Fund Transfer - Birr 200,000",
        "Maximum daily payment/purchase - Birr 500,000",
        "Maximum daily cash advance (cash withdrawal) at Branches - up to Birr 50,000.00",
        "Expiry Date - Five Years",
      ],
      link: "",
      eligibilityHeader: "CBE account holders:",
      eligibilityList: [
        "Individual saving account",
        "Individual current account",
        "Youth account",
      ],
    },
    {
      title: "VISA Classic Women Debit Cards",
      photo: "/icon-and-logos/products/deposit-one.png",
      list: [
        "Contact/contactless cards",
        "Maximum Daily cash withdrawal - Birr 10,000",
        "Maximum Daily Fund Transfer - Birr 200,000",
        "Maximum daily payment/purchase - Birr 500,000",
        "Maximum daily cash advance (cash withdrawal) at Branches - up to Birr 50,000.00",
        "Expiry Date - Five Years",
      ],
      link: "",
      eligibilityHeader: "CBE account holders:",
      eligibilityList: ["Women’s Saving Account holders"],
    },
    {
      title: "VISA Classic Debit Card",
      photo: "/icon-and-logos/products/deposit-one.png",
      list: [
        "Contact and contactless functionality",
        "Maximum Daily Cash Withdrawal: up to Birr 10,000",
        "Maximum Daily Fund Transfer: up to Birr 200,000",
        "Maximum Daily Payment/Purchase: up to Birr 500,000",
        "Maximum Daily Cash Advance at Branches: up to Birr 50,000",
        "Card Expiry: 5 years",
      ],
      link: "",
      eligibilityHeader: "",
      eligibilityList: ["", ""],
    },
    {
      title: "White Label Card",
      photo: "/icon-and-logos/products/deposit-one.png",
      list: [
        "It is a contact card",
        "Maximum Daily cash withdrawal - Birr 10,000",
        "Maximum Daily Fund Transfer - Birr 200,000",
        "Maximum daily payment/purchase - Birr 500,000",
        "Maximum daily cash advance (cash withdrawal) at Branches - up to Birr 50,000.00",
        "Expiry Date - Five Years",
      ],
      link: "",
      eligibilityHeader: "CBE account holders:",
      eligibilityList: [
        "Individual saving account",
        "Individual current account",
        "Youth account",
      ],
    },
    {
      title: "VISA Classic Women Debit Cards",
      photo: "/icon-and-logos/products/deposit-one.png",
      list: [
        "Contact/contactless cards",
        "Maximum Daily cash withdrawal - Birr 10,000",
        "Maximum Daily Fund Transfer - Birr 200,000",
        "Maximum daily payment/purchase - Birr 500,000",
        "Maximum daily cash advance (cash withdrawal) at Branches - up to Birr 50,000.00",
        "Expiry Date - Five Years",
      ],
      link: "",
      eligibilityHeader: "CBE account holders:",
      eligibilityList: ["Women’s Saving Account holders"],
    },
    {
      title: "VISA Classic Debit Card",
      photo: "/icon-and-logos/products/deposit-one.png",
      list: [
        "Contact and contactless functionality",
        "Maximum Daily Cash Withdrawal: up to Birr 10,000",
        "Maximum Daily Fund Transfer: up to Birr 200,000",
        "Maximum Daily Payment/Purchase: up to Birr 500,000",
        "Maximum Daily Cash Advance at Branches: up to Birr 50,000",
        "Card Expiry: 5 years",
      ],
      link: "",
      eligibilityHeader: "",
      eligibilityList: ["", ""],
    },
    {
      title: "White Label Card",
      photo: "/icon-and-logos/products/deposit-one.png",
      list: [
        "It is a contact card",
        "Maximum Daily cash withdrawal - Birr 10,000",
        "Maximum Daily Fund Transfer - Birr 200,000",
        "Maximum daily payment/purchase - Birr 500,000",
        "Maximum daily cash advance (cash withdrawal) at Branches - up to Birr 50,000.00",
        "Expiry Date - Five Years",
      ],
      link: "",
      eligibilityHeader: "CBE account holders:",
      eligibilityList: [
        "Individual saving account",
        "Individual current account",
        "Youth account",
      ],
    },
    {
      title: "VISA Classic Women Debit Cards",
      photo: "/icon-and-logos/products/deposit-one.png",
      list: [
        "Contact/contactless cards",
        "Maximum Daily cash withdrawal - Birr 10,000",
        "Maximum Daily Fund Transfer - Birr 200,000",
        "Maximum daily payment/purchase - Birr 500,000",
        "Maximum daily cash advance (cash withdrawal) at Branches - up to Birr 50,000.00",
        "Expiry Date - Five Years",
      ],
      link: "",
      eligibilityHeader: "CBE account holders:",
      eligibilityList: ["Women’s Saving Account holders"],
    },
    {
      title: "VISA Classic Debit Card",
      photo: "/icon-and-logos/products/deposit-one.png",
      list: [
        "Contact and contactless functionality",
        "Maximum Daily Cash Withdrawal: up to Birr 10,000",
        "Maximum Daily Fund Transfer: up to Birr 200,000",
        "Maximum Daily Payment/Purchase: up to Birr 500,000",
        "Maximum Daily Cash Advance at Branches: up to Birr 50,000",
        "Card Expiry: 5 years",
      ],
      link: "",
      eligibilityHeader: "",
      eligibilityList: ["", ""],
    },
    {
      title: "White Label Card",
      photo: "/icon-and-logos/products/deposit-one.png",
      list: [
        "It is a contact card",
        "Maximum Daily cash withdrawal - Birr 10,000",
        "Maximum Daily Fund Transfer - Birr 200,000",
        "Maximum daily payment/purchase - Birr 500,000",
        "Maximum daily cash advance (cash withdrawal) at Branches - up to Birr 50,000.00",
        "Expiry Date - Five Years",
      ],
      link: "",
      eligibilityHeader: "CBE account holders:",
      eligibilityList: [
        "Individual saving account",
        "Individual current account",
        "Youth account",
      ],
    },
    {
      title: "VISA Classic Women Debit Cards",
      photo: "/icon-and-logos/products/deposit-one.png",
      list: [
        "Contact/contactless cards",
        "Maximum Daily cash withdrawal - Birr 10,000",
        "Maximum Daily Fund Transfer - Birr 200,000",
        "Maximum daily payment/purchase - Birr 500,000",
        "Maximum daily cash advance (cash withdrawal) at Branches - up to Birr 50,000.00",
        "Expiry Date - Five Years",
      ],
      link: "",
      eligibilityHeader: "CBE account holders:",
      eligibilityList: ["Women’s Saving Account holders"],
    },
    {
      title: "VISA Classic Debit Card",
      photo: "/icon-and-logos/products/deposit-one.png",
      list: [
        "Contact and contactless functionality",
        "Maximum Daily Cash Withdrawal: up to Birr 10,000",
        "Maximum Daily Fund Transfer: up to Birr 200,000",
        "Maximum Daily Payment/Purchase: up to Birr 500,000",
        "Maximum Daily Cash Advance at Branches: up to Birr 50,000",
        "Card Expiry: 5 years",
      ],
      link: "",
      eligibilityHeader: "",
      eligibilityList: ["", ""],
    },
    {
      title: "White Label Card",
      photo: "/icon-and-logos/products/deposit-one.png",
      list: [
        "It is a contact card",
        "Maximum Daily cash withdrawal - Birr 10,000",
        "Maximum Daily Fund Transfer - Birr 200,000",
        "Maximum daily payment/purchase - Birr 500,000",
        "Maximum daily cash advance (cash withdrawal) at Branches - up to Birr 50,000.00",
        "Expiry Date - Five Years",
      ],
      link: "",
      eligibilityHeader: "CBE account holders:",
      eligibilityList: [
        "Individual saving account",
        "Individual current account",
        "Youth account",
      ],
    },
    {
      title: "VISA Classic Women Debit Cards",
      photo: "/icon-and-logos/products/deposit-one.png",
      list: [
        "Contact/contactless cards",
        "Maximum Daily cash withdrawal - Birr 10,000",
        "Maximum Daily Fund Transfer - Birr 200,000",
        "Maximum daily payment/purchase - Birr 500,000",
        "Maximum daily cash advance (cash withdrawal) at Branches - up to Birr 50,000.00",
        "Expiry Date - Five Years",
      ],
      link: "",
      eligibilityHeader: "CBE account holders:",
      eligibilityList: ["Women’s Saving Account holders"],
    },
    {
      title: "VISA Classic Women Debit Cards",
      photo: "/icon-and-logos/products/deposit-one.png",
      list: [
        "Contact/contactless cards",
        "Maximum Daily cash withdrawal - Birr 10,000",
        "Maximum Daily Fund Transfer - Birr 200,000",
        "Maximum daily payment/purchase - Birr 500,000",
        "Maximum daily cash advance (cash withdrawal) at Branches - up to Birr 50,000.00",
        "Expiry Date - Five Years",
      ],
      link: "",
      eligibilityHeader: "CBE account holders:",
      eligibilityList: ["Women’s Saving Account holders"],
    },
  ];

  return (
    <div>
      <Hero
        header="CBE Cards"
        description="There are more than 12 types of domestic and international CBE cards: normal classic, women's classic, IFB card, wallet card, international prepaid card (classic, gold, and platinum), domestic gold, domestic platinum, and tourist cards, and others."
        cta={{ label: "Know More", href: "/" }}
      />

      <section className="font-primary page-container my-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
          {deposit.map((deposit, index) => (
            <div key={index}>
              <div className="relative min-h-[250px]">
                <Image
                  src={deposit.photo}
                  alt={deposit.title}
                  // width={278}
                  // height={221}
                  fill={true}
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
              <div className="pt-12">
                <div className="text-2xl font-bold text-accent mb-3">
                  {deposit.title}
                </div>

                {deposit.list.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 mb-1 border-b border-foreground border/20 pb-5 pt-1"
                  >
                    {item}
                  </div>
                ))}

                <h2 className="font-bold text-accent my-4">Eligibilities</h2>

                <div>
                  <h2 className="font-bold mb-2">
                    {deposit.eligibilityHeader}
                  </h2>
                  {deposit.eligibilityList.map((item, idx) => (
                    <p className="text-sm">{item}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
