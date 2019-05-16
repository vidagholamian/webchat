# webChat-collection
![alt text](https://raw.githubusercontent.com/amirhosseinnazari/webChat-collection/master/chat.PNG)


Chat with web-socket ('ws') module on nodejs server, 
it just for showing how web-sockets work


## How to start project
for running application you should install nodemon and then run 
```
nodemon Server/index.js
```


request to localhost:8080, e.g., simply open browser and go to http://localhost:8080
( Do not open html files directly)
![alt text](https://raw.githubusercontent.com/amirhosseinnazari/webChat-collection/master/address.PNG)

تعداد زیادی کاربر میتونن در یک گروه به یکدیگر پیام ارسال کنند چون پیام ها به سرور ارسال میشوند و سرور پیام ها را به صورت برودکست به تمامی کلاینت هایی که به ان وصل هستند ارسال میکند. 

برای این که کاربری بعد از باقی کاربر ها به گروه امد بتواند پیام های قبلی را دریافت کند یک لیست تعریف کردیم که در ان نام کاربر و پیام ها ذخیره میشوند.(محدود به چیزی نیست تمام پیام های قبلی ذخیره می شود)

برای این که ایدی های یکتا داشته باشیم سمت سرور یک تابع تعریف کردیم که هر بار برای هر کلاینت مقداری(مثلا1000) را یک عدد افزایش می دهد.این کار باعث میشود ای دی تکراری ب کلاینت ها ندهیم.سمت کلاینت ساخت ای دی رندوم را حذف میکنیم ولی چک میکنیم که کاربر وارد شده از قبل ای دی داشته یا نه اگر نداشت یک درخواست به سرور فرستاده میشه تا برای این کاربر ای دی جدید اختصاص داده بشه.

"https://code.jquery.com/jquery-3.4.1.min.js" کتابخانه ی
باید اضافه شود.(در index.html)


 
