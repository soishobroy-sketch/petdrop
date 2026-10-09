
// Progressive enhancement: content remains visible without JavaScript.
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
if('IntersectionObserver' in window&&!reduceMotion.matches){
 document.documentElement.classList.add('motion-enabled');
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:0.12});
 document.querySelectorAll('.reveal').forEach(card=>observer.observe(card));
}
// Pointer-based perspective tilt, disabled on touch devices and for reduced motion.
const profile=document.getElementById('rider-profile');
if(window.matchMedia('(hover: hover) and (pointer: fine)').matches){
 profile.addEventListener('pointermove',event=>{if(reduceMotion.matches)return;const r=profile.getBoundingClientRect();const x=(event.clientX-r.left)/r.width-.5;const y=(event.clientY-r.top)/r.height-.5;profile.style.transform=`rotateX(${-y*16}deg) rotateY(${x*16}deg)`});
 profile.addEventListener('pointerleave',()=>{profile.style.transform='rotateX(0deg) rotateY(0deg)'});
}

// Keep original text nodes so language changes preserve links, SVGs, and animations.
const bangla = {"Skip to content": "মূল কনটেন্টে যান", "Why PetDrop": "কেন PetDrop", "Our story": "আমাদের গল্প", "Get in touch": "যোগাযোগ", "Request Pickup": "পিকআপ অনুরোধ", "Built for pet businesses": "পেট শপের জন্য তৈরি", "Heavy Pet Litter": "ভারী ক্যাট লিটার", "Delivery, Made": "ডেলিভারি এখন", "Easy for Shops.": "দোকানের জন্য সহজ।", "You handle the happy pets. We handle the heavy lifting. A dedicated delivery partner for your pet shop’s biggest orders.": "আপনি পোষ্যদের যত্ন নিন, ভারী পণ্য পৌঁছানোর দায়িত্ব আমাদের। আপনার পেট শপের বড় অর্ডারের জন্য নির্ভরযোগ্য ডেলিভারি সঙ্গী।", "Request a Pickup": "পিকআপের অনুরোধ করুন", "Meet your delivery partner ↓": "আপনার ডেলিভারি সঙ্গীকে জানুন ↓", "One simple rate": "একটাই নির্দিষ্ট রেট", "Care in every delivery": "প্রতি ডেলিভারিতে যত্ন", "Big bags.": "বড় ব্যাগ।", "Zero big deal.": "চিন্তা নেই।", "Precious cargo. Handled.": "আপনার পণ্য, যত্নে পৌঁছাবে।", "From your shop, with care.": "আপনার দোকান থেকে, যত্নের সাথে।", "Illustrated yellow PetDrop delivery scooter carrying pet supplies": "পোষ্যদের পণ্য বহনকারী হলুদ PetDrop ডেলিভারি স্কুটারের ছবি", "PET ESSENTIALS": "পোষ্যদের পণ্য", "ONE DELIVERY. ONE RATE.": "এক ডেলিভারি। এক রেট।", "100": "১০০", "Tk / delivery": "টাকা / ডেলিভারি", "HEAVY DELIVERIES. LIGHT WORK.": "ভারী ডেলিভারি। সহজ কাজ।", "MADE FOR PET SHOPS": "পেট শপের জন্যই তৈরি", "BIG ON CARE. SIMPLE ON COST.": "যত্নে কোনো ছাড় নয়। খরচে সরলতা।", "The PetDrop promise": "PetDrop-এর প্রতিশ্রুতি", "Less hassle.": "ঝামেলা কম।", "More happy deliveries.": "স্বস্তির ডেলিভারি বেশি।", "Pet supplies aren’t ordinary parcels.": "পোষ্যদের পণ্য সাধারণ পার্সেল নয়।", "Your delivery partner shouldn’t be ordinary either.": "তাই আপনার ডেলিভারি সঙ্গীও হোক বিশেষ।", "01 / SIMPLE PRICING": "০১ / সহজ রেট", "Flat 100 Tk Rate": "নির্দিষ্ট ১০০ টাকা রেট", "A straightforward rate for your deliveries. Plan your costs and keep your focus on growing your shop.": "ডেলিভারির জন্য নির্দিষ্ট রেট। খরচের হিসাব রাখুন সহজে, আর মন দিন আপনার দোকান বড় করার কাজে।", "02 / EXTRA CARE": "০২ / বাড়তি যত্ন", "Zero Damage": "পণ্যের ক্ষতি নয়", "Heavy bags deserve careful hands. Our commitment is simple: treat every order like it’s our own.": "ভারী ব্যাগের জন্য চাই যত্নশীল হাত। আমাদের প্রতিশ্রুতি—প্রতিটি অর্ডার নিজের পণ্যের মতো যত্নে রাখা।", "03 / NO EXTRA WORRY": "০৩ / বাড়তি চিন্তা নেই", "No Return Charge": "রিটার্ন চার্জ নেই", "Not every delivery goes to plan. If an order comes back, an extra return charge won’t come with it.": "সব ডেলিভারি পরিকল্পনামতো হয় না। কোনো অর্ডার ফেরত এলে তার জন্য বাড়তি রিটার্ন চার্জ দিতে হবে না।", "A real person. Real care. ↘": "মানুষের হাতে, আন্তরিক যত্নে। ↘", "Illustrated rider profile placeholder": "রাইডারের প্রোফাইলের নমুনা ইলাস্ট্রেশন", "YOUR DEDICATED DELIVERY PARTNER ↗": "আপনার নিবেদিত ডেলিভারি সঙ্গী ↗", "Profile illustration": "প্রোফাইল ইলাস্ট্রেশন", "The person behind the pickup": "পিকআপের পেছনের মানুষটি", "More than a rider.": "শুধু রাইডার নয়।", "A partner in your business.": "আপনার ব্যবসার সঙ্গী।", "Behind every bag is a shop owner’s hard work and a pet waiting at home. PetDrop is built around that simple idea: your deliveries deserve a dedicated person who cares.": "প্রতিটি ব্যাগের পেছনে আছে একজন দোকানির পরিশ্রম, আর ঘরে অপেক্ষায় থাকা একটি পোষ্য। এই ভাবনা থেকেই PetDrop—আপনার ডেলিভারির দায়িত্বে থাকুক একজন যত্নশীল মানুষ।", "From the first pickup to the final doorstep, we’re here to make heavy deliveries feel a little lighter.": "প্রথম পিকআপ থেকে ক্রেতার দরজা পর্যন্ত, ভারী ডেলিভারির দায়িত্বটা আপনার জন্য সহজ করতেই আমরা আছি।", "The PetDrop Founder & Rider": "PetDrop-এর প্রতিষ্ঠাতা ও রাইডার", "Small team. Personal responsibility. Every delivery.": "ছোট টিম। নিজের দায়িত্বে। প্রতিটি ডেলিভারি।", "You grow your shop.": "আপনি দোকান বড় করুন।", "We’ll carry the heavy stuff.": "ভারী পণ্যের দায়িত্ব আমাদের।", "Your next delivery deserves the PetDrop treatment.": "আপনার পরের ডেলিভারি হোক PetDrop-এর যত্নে।", "Pickup booking opens soon": "শিগগিরই পিকআপ বুকিং চালু হবে", "Our booking phone and email will be available here. Pickup requests are not yet open.": "বুকিংয়ের ফোন নম্বর ও ইমেইল এখানে দেওয়া হবে। পিকআপের অনুরোধ নেওয়া এখনো শুরু হয়নি।", "Heavy deliveries. Light work.": "ভারী ডেলিভারি। সহজ কাজ।", "Dedicated to pet shops and the pets they serve.": "পেট শপ ও তাদের প্রিয় পোষ্যদের সেবায় নিবেদিত।", "Explore": "ঘুরে দেখুন", "Request a pickup": "পিকআপের অনুরোধ করুন", "Let’s talk": "যোগাযোগ করুন", "Phone / WhatsApp: coming soon": "ফোন / WhatsApp: শিগগিরই আসছে", "Email: coming soon": "ইমেইল: শিগগিরই আসছে", "B2B pet items delivery": "পেট শপের জন্য পোষ্যপণ্য ডেলিভারি", "© 2026 PetDrop. All rights reserved.": "© ২০২৬ PetDrop। সর্বস্বত্ব সংরক্ষিত।", "Made for the shops that": "সেই দোকানগুলোর জন্য, যারা", "care for the paws.": "পোষ্যদের যত্ন নেয়।"};
const translatableNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
let textNode;
while ((textNode = walker.nextNode())) {
 if (textNode.parentElement.closest('script, style, .language-switch')) continue;
 const key = textNode.nodeValue.trim();
 if (Object.prototype.hasOwnProperty.call(bangla, key)) {
  translatableNodes.push({node:textNode, en:textNode.nodeValue, bn:textNode.nodeValue.replace(key, bangla[key])});
 }
}
const accessibleTranslations = {
 'PetDrop home':'PetDrop হোম',
 'Main navigation':'মূল নেভিগেশন',
 'Choose language':'ভাষা নির্বাচন করুন'
};
const accessibleNodes = Array.from(document.querySelectorAll('[aria-label]')).map(node=>({node,en:node.getAttribute('aria-label')})).filter(item=>accessibleTranslations[item.en]);
const englishTitle = document.title;
const description = document.querySelector('meta[name="description"]');
const englishDescription = description.content;
function setLanguage(language, remember = true) {
 const lang = language === 'bn' ? 'bn' : 'en';
 document.documentElement.lang = lang;
 translatableNodes.forEach(item => {item.node.nodeValue = item[lang]});
 accessibleNodes.forEach(item=>item.node.setAttribute('aria-label',lang==='bn'?accessibleTranslations[item.en]:item.en));
 document.querySelectorAll('[data-language]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.language===lang)));
 document.title = lang === 'bn' ? 'PetDrop — ভারী ডেলিভারি। সহজ কাজ।' : englishTitle;
 description.content = lang === 'bn' ? 'PetDrop পেট শপের ভারী ক্যাট লিটার ডেলিভারি সহজ করে। নির্দিষ্ট ১০০ টাকা রেট, যত্নশীল ডেলিভারি এবং কোনো রিটার্ন চার্জ নেই।' : englishDescription;
 if(remember){try{localStorage.setItem('petdrop-language',lang)}catch(error){/* Language switching still works when storage is unavailable. */}}
}
document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.language)));
let savedLanguage = 'en';
try{savedLanguage=localStorage.getItem('petdrop-language')||'en'}catch(error){}
setLanguage(savedLanguage,false);
