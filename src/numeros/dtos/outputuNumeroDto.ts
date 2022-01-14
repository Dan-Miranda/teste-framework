import { OutputDivisorDto } from './outputDivisor.dto';
import { OutputPrimoDto } from './outputPrimo.dto';

interface OutputNumeroDto extends OutputDivisorDto, OutputPrimoDto {}

export { OutputNumeroDto };
