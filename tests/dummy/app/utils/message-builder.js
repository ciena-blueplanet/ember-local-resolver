export default function messageBuilder ({type, hook, target, sourceType, sourceName, scope, path}) {
  return Ember.String.htmlSafe(`
    <div class='helpers'>Helpers</div>
    <hr>
    <div class='context'>Source: ${sourceType}: ${sourceName}</div>
    <div class='message' data-test='${hook}'>
      <div class='request'>
        <div class='target'>${target}</div>
      </div>
      <svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'
	      width='14px' height='14px' viewBox='0 0 23 23' xml:space='preserve'>
        <polygon fill='#BABCBE' points='20.2,13.3 23.5,11.5 3.2,0 0,1.8'/>
        <polygon fill='#BABCBE' points='23.7,11.6 20.5,9.8 0.2,21.2 3.4,23'/>
      </svg>
      <div class='result'>
        <div class='scope ${scope.toLowerCase()}'>${scope}</div>
        <div class='path'>${path}</div>
      </div>
    </div>
  `)
}
