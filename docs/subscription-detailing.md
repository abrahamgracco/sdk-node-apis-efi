## Detailing subscriptions

Works just like the last example, but here you pass the subscription id:

```js
gerencianet
  .detailSubscription({
    subscription_id: 11
  })
  .then(function (subscription) {
    console.log('Response:',
      util.inspect(subscription, false, null));
  })
  .catch(console.log)
  .done();
```

```js
{
  "code": 200,
  "data": {
    "subscription_id": 12,
    "value": 2000,
    "status": "new",
    "payment_method": null,
    "interval": 1,
    "repeats": 2,
    "processed_amount": 0,
    "created_at": "2015-05-14 15:39:14",
    "history": [
      {
        "charge_id": 233,
        "status": "new",
        "created_at": "2015-05-14 15:39:14"
      }
    ]
  }
}
```

Note that if you [detail a charge](/docs/charge-detailing.md) that belongs to a subscription, the response will have a `subscription_id`. If you need the subscription information, you can concat the calls like this:

```js

var chargeInput = {
  charge_id: 233
}

var detailChargeCallback = function (charge) {
  return {
    subscription_id: charge.subscription_id;
  }
}

gerencianet
  .detailCharge(chargeInput)
  .then(detailChargeCallback)
  .then(gerencianet.detailSubscription)
  .then(console.log)
  .catch(console.log)
  .done();
```