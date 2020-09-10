import slimdom from 'slimdom';
import { parseScript } from 'fontoxpath';

export function getStringifiedAst(expression: string): string {
	const document = new slimdom.Document();
	const ast = parseScript(expression, {}, document);
	return slimdom.serializeToWellFormedString(<slimdom.Node>(<unknown>ast));
}
