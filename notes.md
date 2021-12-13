# Notes

- sphere in CSS: https://codepen.io/vikas78/pen/vYEymWd
- CSS vars: https://vanseodesign.com/css/custom-properties-and-animations/

```css
  background: radial-gradient(circle at 65% 15%, white 1px, #ebff36 3%, #324700 60%, #ebff36 100%);
  background: radial-gradient(circle at 25% 70%, 
    white 1px,
    hsl(60, 100%, 60%) 5%, 
    hsl(40, 100%, 20%) 65%, 
    hsl(60, 100%, 60%) 125%
  );
```

```js
  animation-delay: ${inc}s;

  $('#duration').addEventListener('input', e => {
    duration = Number(e.target.value);
    updateAnimation();
  });
```