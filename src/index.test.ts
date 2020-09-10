import { getStringifiedAst } from './index';

const expectedResultByExpresion: { [expression: string]: string } = {
	'.//nerf': `
		<xqx:module xmlns:xqx="http://www.w3.org/2005/XQueryX">
			<xqx:mainModule>
				<xqx:queryBody>
					<xqx:pathExpr>
						<xqx:stepExpr>
							<xqx:filterExpr>
								<xqx:contextItemExpr/>
							</xqx:filterExpr>
						</xqx:stepExpr>
						<xqx:stepExpr>
							<xqx:xpathAxis>descendant-or-self</xqx:xpathAxis>
							<xqx:anyKindTest/>
						</xqx:stepExpr>
						<xqx:stepExpr>
							<xqx:xpathAxis>child</xqx:xpathAxis>
							<xqx:nameTest>nerf</xqx:nameTest>
						</xqx:stepExpr>
					</xqx:pathExpr>
				</xqx:queryBody>
			</xqx:mainModule>
		</xqx:module>
	`,
	'descendant::nerf': `
		<xqx:module xmlns:xqx="http://www.w3.org/2005/XQueryX">
			<xqx:mainModule>
				<xqx:queryBody>
					<xqx:pathExpr>
						<xqx:stepExpr>
							<xqx:xpathAxis>descendant</xqx:xpathAxis>
							<xqx:nameTest>nerf</xqx:nameTest>
						</xqx:stepExpr>
					</xqx:pathExpr>
				</xqx:queryBody>
			</xqx:mainModule>
		</xqx:module>
	`
};

describe('getStringifiedAst', () => {
	Object.keys(expectedResultByExpresion).forEach(expression =>
		it(expression, () =>
			expect(getStringifiedAst(expression)).toBe(
				expectedResultByExpresion[expression].replace(/\t/g, '').replace(/\n/g, '')
			)
		)
	);
});
