import { chromium } from "playwright";

(async () => {
  // const browser = await chromium.launch({ headless: false });

  // const context = await browser.newContext();
  // const page = await context.newPage();

  const profiles = [
    // {
    //   name: "Riya Varshney",
    //   link: "https://in.linkedin.com/in/riya-varshney-r18",
    // },
    // {
    //   name: "Rajeshwar Singh",
    //   link: "https://in.linkedin.com/in/rajeshwarsingh27",
    // },
    // {
    //   name: "Pulkit Chauhan",
    //   link: "https://in.linkedin.com/in/pulkitchauhan03",
    // },
    // {
    //   name: "Sweety Hooda",
    //   link: "https://in.linkedin.com/in/sweety-hooda-56376b292",
    // },
    // {
    //   name: "Chirag Malik",
    //   link: "https://in.linkedin.com/in/chirag-malik-63ba44282",
    // },
    // {
    //   name: "Arshdeep Kaur",
    //   link: "https://in.linkedin.com/in/arshdeep-kaur-contact00",
    // },
    // {
    //   name: "Tushar Kamble",
    //   link: "https://in.linkedin.com/in/tushar-kamble-734a58204",
    // },
    // {
    //   name: "Himanshi Namdev",
    //   link: "https://in.linkedin.com/in/himanshi-namdev-640595320",
    // },
    // {
    //   name: "Adarsh Sharma",
    //   link: "https://in.linkedin.com/in/adarsh-sharma-7b25a1259",
    // },
    // {
    //   name: "Ayush Ranjan",
    //   link: "https://in.linkedin.com/in/ayush-ranjan-10ar10",
    // },
    // {
    //   name: "Dravisha Pokharna",
    //   link: "https://in.linkedin.com/in/dravisha-pokharna-8199091b6",
    // },
    // {
    //   name: "Shreyas Jadhav",
    //   link: "https://in.linkedin.com/in/shreyasjadhav4",
    // },
    // {
    //   name: "Ishika Sahu",
    //   link: "https://in.linkedin.com/in/ishika-sahu-0709",
    // },
    // {
    //   name: "Indraudh Sarkar",
    //   link: "https://in.linkedin.com/in/indraudh-sarkar-2493a1230",
    // },
    // {
    //   name: "Abhinav Verma",
    //   link: "https://in.linkedin.com/in/abhinavverma0010",
    // },
    // { name: "Mayank Jain", link: "https://in.linkedin.com/in/mayankjain1784" },
    // {
    //   name: "Krish Goyal",
    //   link: "https://in.linkedin.com/in/krish-goyal-093436289",
    // },
    // {
    //   name: "Yashaswini Gowda",
    //   link: "https://in.linkedin.com/in/yashaswini-gowda-053192277",
    // },
    // {
    //   name: "Sanjani Kumari",
    //   link: "https://in.linkedin.com/in/sanjani-kumari-a27822295",
    // },
    { name: "Kushdeep S.", link: "https://in.linkedin.com/in/kushdeepwalia" },
    {
      name: "Amit Pandey",
      link: "https://in.linkedin.com/in/amit-pandey-ba518982",
    },
    { name: "Monal Barse", link: "https://in.linkedin.com/in/monal-barse" },
    {
      name: "Pavan Kumar Nagamantry",
      link: "https://in.linkedin.com/in/pavan-kumar-nagamantry-a466231a6",
    },
    {
      name: "Harshvardhan Repaswal",
      link: "https://in.linkedin.com/in/harshvardhan-repaswal-1777a427b",
    },
    {
      name: "Praharsh Kumar Agrawal",
      link: "https://in.linkedin.com/in/praharsh-kumar-agrawal-38b004194",
    },
    {
      name: "Toshib Bagde",
      link: "https://in.linkedin.com/in/toshib-bagde-51843330",
    },
    {
      name: "Mohamed Aqeel",
      link: "https://lk.linkedin.com/in/mohammedaqeel7",
    },
    { name: "Ashray Aman", link: "https://in.linkedin.com/in/ashray-aman" },
    {
      name: "Avijit Singh",
      link: "https://in.linkedin.com/in/avijit-singh-71b6a673",
    },
    {
      name: "Soumik Debangshi",
      link: "https://in.linkedin.com/in/soumik-debangshi-2286121ab",
    },
    { name: "Amulya Dubey", link: "https://in.linkedin.com/in/am522" },
    {
      name: "Harsh Srivastav",
      link: "https://in.linkedin.com/in/harsh-srivastav-bb57b725a",
    },
    {
      name: "Sanchita Majumdar",
      link: "https://in.linkedin.com/in/sanchita-majumdar-276b94243",
    },
    {
      name: "Daksh Raj Singh",
      link: "https://in.linkedin.com/in/daksh-raj-singh-b68086295",
    },
    { name: "Harsh Vats", link: "https://in.linkedin.com/in/vats-harsh" },
    {
      name: "Manikanta Srinivas Ala",
      link: "https://in.linkedin.com/in/manikanta-srinivas-ala",
    },
    {
      name: "Vineet Mathur",
      link: "https://in.linkedin.com/in/vineet-mathur-a84947246",
    },
    {
      name: "Riya Maheshwari",
      link: "https://in.linkedin.com/in/riya-maheshwari-779a50261",
    },
    {
      name: "Soumya Bharti",
      link: "https://in.linkedin.com/in/soumya-bharti-a1114a289",
    },
    {
      name: "Sumanth Ravuri",
      link: "https://in.linkedin.com/in/sumanth-ravuri-2824a5b7",
    },
    {
      name: "Sayan Dey Sarkar",
      link: "https://in.linkedin.com/in/sayan-dey-sarkar-06a4a8231",
    },
    { name: "Harsh Jha", link: "https://in.linkedin.com/in/harshjha-iiti" },
    {
      name: "Nidhi Mishra",
      link: "https://in.linkedin.com/in/nidhi-mishra-882268206",
    },
    {
      name: "Ashutosh Kumar Jha",
      link: "https://in.linkedin.com/in/ashutosh-kumar-jha-601098280",
    },
    {
      name: "Vedant Parkhe",
      link: "https://in.linkedin.com/in/vedant-parkhe-934b841b9",
    },
    { name: "Amey Kamble", link: "https://in.linkedin.com/in/ameykamble" },
    { name: "Anas Khan", link: "https://in.linkedin.com/in/anaskhan02" },
    {
      name: "Neetha Joseph Kalappurakkal",
      link: "https://in.linkedin.com/in/neethajoseph",
    },
  ];

  async function smoothHumanScroll(page) {

  // helper
  const microScroll = async (distance, steps, minDelay, maxDelay) => {
    const step = distance / steps;
    for (let i = 0; i < steps; i++) {
      await page.mouse.wheel(0, step);
      await page.waitForTimeout(
        minDelay + Math.random() * (maxDelay - minDelay)
      );
    }
  };

  // 1️⃣ Initial scan (slow → medium)
  const initialscanrand = 200 + Math.random() * 150
  await microScroll(initialscanrand,10 + Math.random() * 50, 40, 80);

  await page.waitForTimeout(600 + Math.random() * 600);

  // 2️⃣ Reading mode (very slow)
  const readingmoderand = 150 + Math.random() * 100
  await microScroll(readingmoderand,8 + Math.random() * 12,80,150);

  await page.waitForTimeout(1200 + Math.random() * 1500);

  // 3️⃣ Attention fades → faster scan
  const attentionfaderand = 300 + Math.random() * 200
  await microScroll(attentionfaderand,10 + Math.random() * 35,20,50);

  await page.waitForTimeout(500 + Math.random() * 600);

  // 4️⃣ Quick jump up (re-orient)
  const re_orient_distance = -(initialscanrand + readingmoderand + attentionfaderand)
  await microScroll(re_orient_distance,6 + Math.random() * 9,15 ,35);

  // 5️⃣ Decision pause
  await page.waitForTimeout(1500 + Math.random() * 2000);



  }


  for (const people of profiles) {
    const browser = await chromium.launch({ headless: false });

    const context = await browser.newContext({
      storageState: "auth.json",
    });

    const page = await context.newPage();
    await page.goto(people.link);

    await page.waitForTimeout(2000);
    await smoothHumanScroll(page)
    // await page.pause();

    const cntbtn = page.getByRole("button", {
      name: new RegExp(`Invite ${people.name} to connect`, "i"),
    });
    const count = await cntbtn.count();

    console.log("count is ", count);
    // await page.pause()
    if (Math.random() < 0.25) {
      console.log("Skipping", people.name);
      await browser.close();
      continue;
    } if (await cntbtn.isVisible()) {
      const pauses = Math.random() * 1000 + 1000;
      await page.waitForTimeout(pauses);
      await cntbtn.click();
      const pause2 = Math.random() * 700 + 700;
      await page.waitForTimeout(pause2);
      const sendconnectionmodal = page.locator(".artdeco-modal__actionbar");
      await sendconnectionmodal.waitFor({ state: "visible" });
      await sendconnectionmodal
        .getByRole("button", { name: "Send without a note" })
        .click();
      // await page.pause();
    } else {
      // await page.pause()
      await page.getByRole("button", { name: "More actions" }).click();
      const dropdown = page
        .locator(".artdeco-dropdown__content")
        .filter({ has: page.getByRole("button", { name: "Connect" }) });

      await dropdown.waitFor({ state: "visible" });
      const pauses = Math.random() * 1000 + 1000;
      await page.waitForTimeout(pauses);
      await dropdown.getByRole("button", { name: "connect" }).click();

      const sendconnectionmodal = page.locator(".artdeco-modal__actionbar");
      await sendconnectionmodal.waitFor({ state: "visible" });
      const pause2 = Math.random() * 700 + 700;
      await page.waitForTimeout(pause2);
      await sendconnectionmodal
        .getByRole("button", { name: "Send without a note" })
        .click();

      // await page.pause();
    }
    // await page.pause();
    if(Math.random() < 0.6){
      await smoothHumanScroll(page)
    }
    console.log(await page.title());
    await browser.close();
  }
})();
