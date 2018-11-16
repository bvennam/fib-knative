module.exports.fibonacci = function(number) {
  var sequence = [1, 1];
  if (number == 1) {
    return [1];
  }
  if (number == 2) {
    return sequence;
  }
  while (sequence.length < number) {
    sequence = fibonaccir(sequence);
  }
  return sequence;
};

function fibonaccir(sequence) {
    var newseq = sequence;
    newseq.push(sequence[sequence.length -1 ] + sequence[sequence.length-2]);
    return newseq;
  //}
}
